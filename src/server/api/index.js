import { prop, path, pick } from 'ramda'

import serverEndpoints from 'sls-aws/src/server/api/actions'
import clientEndpoints from 'sls-aws/src/descriptions/endpoints'
import validateSchema from 'sls-aws/src/util/validateSchema'
import { userPk } from 'sls-aws/src/server/api/pkMaker'


const validateOrNah = (schemaType, endpointId, endpointDesc) => (payload) => {
	const schema = prop(schemaType, endpointDesc)
	if (schema) {
		return validateSchema(endpointId, schema, payload).then((res) => {
			if (prop('valid', res)) {
				return payload
			}
			throw {
				statusCode: schemaType === 'payloadSchema' ? 400 : 500,
				schemaErrors: ajvErrors(schema, prop('errors', res)),
			}
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
				throw {
					statusCode: 500,
					generalErrors: `Endpoint ${endpointId} not found`,
				}
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
			console.log(error)
			return {
				generalErrors: error.message,
				...pick(['generalErrors', 'schemaErrors'], error),
				statusCode: error.statusCode || 500,
			}
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
