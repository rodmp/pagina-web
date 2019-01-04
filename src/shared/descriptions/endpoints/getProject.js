import {
	GET_PROJECT,
} from 'sls-aws/src/shared/descriptions/endpoints/endpointIds'

import { recordEndpointType } from 'sls-aws/src/shared/descriptions/endpoints/lenses'
import { project } from 'sls-aws/src/shared/descriptions/endpoints/recordTypes'

import projectResponseSchema from 'sls-aws/src/shared/descriptions/endpoints/schemas/projectResponseSchema'
import getProjectPayloadSchema from 'sls-aws/src/shared/descriptions/endpoints/schemas/getProjectPayloadSchema'

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
