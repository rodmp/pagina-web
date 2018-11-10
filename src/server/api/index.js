import { prop, path, pick } from 'ramda'

import validateSchema from 'sls-aws/src/util/validateSchema'
import {
	customError, generalError, payloadSchemaError, responseSchemaError,
} from 'sls-aws/src/server/api/errors'
import { userPk } from 'sls-aws/src/server/api/pkMaker'
import ajvErrors from 'sls-aws/src/util/ajvErrors'
import {
	getPayloadSchema, getResultSchema, getAuthentication,
	testEndpointExists,
} from 'sls-aws/src/server/api/getEndpointDesc'
import serverEndpoints from 'sls-aws/src/server/api/actions'


const validateOrNah = (schemaType, endpointId, schema) => (payload) => {
	if (schema) {
		return validateSchema(endpointId, schema, payload).then((res) => {
			if (prop('valid', res)) {
				return payload
			}
			const errors = ajvErrors(schema, prop('errors', res))
			throw schemaType === 'payloadSchema'
					? payloadSchemaError(errors) : responseSchemaError(errors)
		})
	}
	return Promise.resolve(payload)
}

export const apiFn = async (event, context) => {
	try {
		const { endpointId, payload } = event
		const endpointExists = testEndpointExists(endpointId)
		if (!endpointExists) {
			throw generalError(`Endpoint ${endpointId} not found`)
		}
		const action = prop(endpointId, serverEndpoints)
		const payloadSchema = getPayloadSchema(endpointId)
		const resultSchema = getResultSchema(endpointId)
		// const authentication = getAuthentication(endpointId)
		const userId = userPk(
			path(['identity', 'cognitoIdentityId'], context),
		)

		const validatePayload = validateOrNah(
			'payloadSchema', endpointId, payloadSchema,
		)
		const validateResult = validateOrNah(
			'resultSchema', endpointId, resultSchema,
		)

		await validatePayload(payload)
		const res = await action({ userId, payload })
		await validateResult(res)

		return { statusCode: 200, body: res }
	} catch (error) {
		const errorMessage = error.message
		return customError(error.statusCode || 500, {
			...(errorMessage ? { generalErrors: errorMessage } : {}),
			...pick(['generalErrors', 'schemaErrors'], error),
		})
	}
}

// can't return promise?
export default (event, context, callback) => {
	apiFn(event, context, callback).then((res) => {
		callback(null, res)
	})
}
