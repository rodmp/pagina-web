import { prop, propOr } from 'ramda'

import validateSchema from 'sls-aws/src/util/validateSchema'
import { actionProp } from 'sls-aws/src/server/api/lenses'

const validateOrNah = (schemaType, endpointId, endpointDesc, payload) => {
	const schema = prop(schemaType, endpointDesc)
	if (schema) {
		return validateSchema(endpointId, schema, payload).then((res) => {
			if (prop('valid', res)) {
				return payload
			}
			return Promise.reject({
				statusCode: 400,
				schemaErrors: prop('errors', res),
			})
		})
	}
	return Promise.resolve(payload)
}


const mutatePayloadOrNah = (mutateType, endpointDesc, payload) => {
	const mutatePromise = prop(mutateType, endpointDesc)
	return mutatePromise ? mutatePromise(payload) : Promise.resolve(payload)
}


export default (endpoints, endpointId, payload) => {
	const endpointDesc = prop(endpointId, endpoints)
	const actionPromise = actionProp(endpointDesc)
	if (!endpointDesc || !actionPromise) {
		return [
			() => Promise.reject({
				statusCode: 404,
				generalError: `Endpoint ${endpointId} not found`,
			}),
		]
	}
	return [
		propOr(Promise.resolve(payload), 'authentication'),
		validateOrNah('payloadSchema', endpointId, endpointDesc, payload),
		mutatePayloadOrNah('toInternalValue', endpointDesc, payload),
		actionPromise,
		mutatePayloadOrNah('toRepresentation', endpointDesc, payload),
		validateOrNah('responseSchema', endpointId, endpointDesc, payload),
	]
}
