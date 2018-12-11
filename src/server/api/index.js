import { prop, not, equals, contains, and, pick } from 'ramda'

import validateSchema from 'sls-aws/src/util/validateSchema'
import {
	customError, generalError, payloadSchemaError, responseSchemaError,
	notFoundError, authorizationError,
} from 'sls-aws/src/server/api/errors'
import { userPk } from 'sls-aws/src/server/api/pkMaker'
import ajvErrors from 'sls-aws/src/util/ajvErrors'
import {
	getPayloadSchema, getResultSchema, getAuthentication,
	testEndpointExists,
} from 'sls-aws/src/server/api/getEndpointDesc'
import serverEndpoints from 'sls-aws/src/server/api/actions'
import getCognitoUser from 'sls-aws/src/server/api/getCognitoUser'
import { authenticated } from 'sls-aws/src/constants/authenticationTypes'



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
	getAuthenticationFn, testEndpointExistsFn,
) => async (event, context) => {
	try {
		const { endpointId, payload } = event
		const endpointExists = testEndpointExistsFn(endpointId)
		if (!endpointExists) {
			throw notFoundError(endpointId)
		}
		const action = prop(endpointId, serverEndpointsObj)
		const payloadSchema = getPayloadSchemaFn(endpointId)
		const resultSchema = getResultSchemaFn(endpointId)

		let userId
		const authentication = getAuthenticationFn(endpointId)
		if (authentication) {
			const { error, cognitoUser } = await getCognitoUser(context)
			if (error) {
				throw authorizationError(error)
			}
			const cognitoGroups = cognitoUser['cognito:groups']
			const invalidAuthentication = and(
				not(equals(authentication, authenticated)),
				not(contains(authentication, cognitoGroups)),
			)
			if (invalidAuthentication) {
				throw authorizationError('Not admin user')
			}
			userId = cognitoUser.sub
		}

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
	serverEndpoints, getPayloadSchema, getResultSchema, getAuthentication,
	testEndpointExists,
)

// can't return promise?
export default (event, context, callback) => {
	apiFn(event, context, callback).then((res) => {
		callback(null, res)
	})
}
