import {
	ACCEPT_PROJECT,
} from 'root/src/shared/descriptions/endpoints/endpointIds'

import { recordEndpointType } from 'root/src/shared/descriptions/endpoints/lenses'
import { project } from 'root/src/shared/descriptions/endpoints/recordTypes'

import acceptProjectPayloadSchema from 'root/src/shared/descriptions/endpoints/schemas/acceptProjectPayloadSchema'
import projectResponseSchema from 'root/src/shared/descriptions/endpoints/schemas/projectResponseSchema'

export const payloadSchema = acceptProjectPayloadSchema
export const responseSchema = projectResponseSchema

export default { 
	[ACCEPT_PROJECT]: {
		endpointType: recordEndpointType,
		recordType: project,
		payloadSchema,
		responseSchema,
	},
}
