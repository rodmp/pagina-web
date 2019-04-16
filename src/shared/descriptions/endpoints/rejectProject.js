import {
	REJECT_PROJECT,
} from 'root/src/shared/descriptions/endpoints/endpointIds'

import { recordEndpointType } from 'root/src/shared/descriptions/endpoints/lenses'
import { project } from 'root/src/shared/descriptions/endpoints/recordTypes'

import rejectProjectPayloadSchema from 'root/src/shared/descriptions/endpoints/schemas/rejectProjectPayloadSchema'
import projectResponseSchema from 'root/src/shared/descriptions/endpoints/schemas/projectResponseSchema'

export const payloadSchema = rejectProjectPayloadSchema
export const responseSchema = projectResponseSchema

export default {
	[REJECT_PROJECT]: {
		endpointType: recordEndpointType,
		recordType: project,
		payloadSchema,
		responseSchema,
	},
}
