import { prop, path, pick } from 'ramda'

import serverEndpoints from 'sls-aws/src/server/api/actions'
import clientEndpoints from 'sls-aws/src/descriptions/endpoints'
import validateSchema from 'sls-aws/src/util/validateSchema'
import {
	customError, generalError, payloadSchemaError, responseSchemaError,
} from 'sls-aws/src/server/api/errors'
import { userPk } from 'sls-aws/src/server/api/pkMaker'
import ajvErrors from 'sls-aws/src/util/ajvErrors'


const validateOrNah = (schemaType, endpointId, endpointDesc) => (payload) => {
	const schema = prop(schemaType, endpointDesc)
	if (schema) {
		return validateSchema(endpointId, schema, payload).then((res) => {
			if (prop('valid', res)) {
				return payload
			}
			const errors = ajvErrors(schema, prop('errors', res))
			throw schemaType === 'payloadSchema' ?
					payloadSchemaError(errors) : responseSchemaError(errors)
		})
	}
	return Promise.resolve(payload)
}

export const apiHof = (clientEndpointsObj, serverEndpointsObj) => (
	async (event, context) => {
		try {
			const { endpointId, payload } = event
			const userId = userPk(
				path(['identity', 'cognitoIdentityId'], context),
			)
			const endpointObj = prop(endpointId, clientEndpointsObj)
			if (!endpointObj) {
				throw generalError(`Endpoint ${endpointId} not found`)
			}
			const validatePayload = validateOrNah(
				'payloadSchema', endpointId, endpointObj,
			)
			const validateResult = await validateOrNah(
				'resultSchema', endpointId, endpointObj,
			)
			const { payloadLenses, responseLenses } = endpointObj
			const action = prop(endpointId, serverEndpointsObj)
			await validatePayload(payload)
			const res = await action({
				payload,
				payloadLenses,
				responseLenses,
				userId,
			})
			await validateResult(payload)
			return { statusCode: 200, body: res }
		} catch (error) {
			const errorMessage = error.message
			return customError(error.statusCode || 500, {
				...(errorMessage ? { generalErrors: errorMessage } : {}),
				...pick(['generalErrors', 'schemaErrors'], error),
			})
		}
	}
)

export const apiFn = apiHof(clientEndpoints, serverEndpoints)

// can't return promise?
export default (event, context, callback) => {
	apiFn(event, context, callback).then((res) => {
		callback(null, res)
	})
}
