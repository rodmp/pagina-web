import {
	GET_PROJECT,
} from 'root/src/shared/descriptions/endpoints/endpointIds'

import { recordEndpointType } from 'root/src/shared/descriptions/endpoints/lenses'
import { project } from 'root/src/shared/descriptions/endpoints/recordTypes'

import projectResponseSchema from 'root/src/shared/descriptions/endpoints/schemas/projectResponseSchema'
import getProjectPayloadSchema from 'root/src/shared/descriptions/endpoints/schemas/getProjectPayloadSchema'

export const payloadSchema = getProjectPayloadSchema
export const responseSchema = projectResponseSchema

export default {
	[GET_PROJECT]: {
		endpointType: recordEndpointType,
		recordType: project,
		payloadSchema,
		responseSchema,
	},
}
