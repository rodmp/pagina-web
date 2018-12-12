import { prop, pick } from 'ramda'

import validateSchema from 'sls-aws/src/util/validateSchema'
import {
	customError, payloadSchemaError, responseSchemaError,
	notFoundError,
} from 'sls-aws/src/server/api/errors'
import ajvErrors from 'sls-aws/src/util/ajvErrors'
import {
	getPayloadSchema, getResultSchema, testEndpointExists,
} from 'sls-aws/src/server/api/getEndpointDesc'
import serverEndpoints from 'sls-aws/src/server/api/actions'
import authorizeRequest from 'sls-aws/src/server/api/authorizeRequest'


const validateOrNah = (schemaType, endpointId, schema) => (payload) => {
	if (schema) {
		return validateSchema(
			`${endpointId}${schemaType}`, schema, payload,
		).then((res) => {
			if (prop('valid', res)) {
				return payload
			}
			const errors = ajvErrors(schema, prop('errors', res))
			const errorType = schemaType === 'payloadSchema' ?
				payloadSchemaError(errors) : responseSchemaError(errors)
			throw errorType
		})
	}
	return Promise.resolve(payload)
}

export const apiHof = (
	serverEndpointsObj, getPayloadSchemaFn, getResultSchemaFn,
	authorizeRequestFn, testEndpointExistsFn,
) => async (event) => {
	try {
		const { endpointId, payload, authentication } = event
		const endpointExists = testEndpointExistsFn(endpointId)
		if (!endpointExists) {
			throw notFoundError(endpointId)
		}
		const action = prop(endpointId, serverEndpointsObj)
		const payloadSchema = getPayloadSchemaFn(endpointId)
		const resultSchema = getResultSchemaFn(endpointId)

		const userId = await authorizeRequestFn(endpointId, authentication)

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
		// console.warn(error)
		return customError(error.statusCode || 500, {
			...(errorMessage ? { generalErrors: errorMessage } : {}),
			...pick(['generalErrors', 'schemaErrors'], error),
		})
	}
}

export const apiFn = apiHof(
	serverEndpoints, getPayloadSchema, getResultSchema, authorizeRequest,
	testEndpointExists,
)

// can't return promise?
export default (event, context, callback) => {
	apiFn(event, context, callback).then((res) => {
		callback(null, res)
	})
}
