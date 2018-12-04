import {
	GET_PROJECT,
} from 'sls-aws/src/descriptions/endpoints/endpointIds'

import { everyone } from 'sls-aws/src/constants/authenticationTypes'

import { recordEndpointType } from 'sls-aws/src/descriptions/endpoints/lenses'
import { project } from 'sls-aws/src/descriptions/endpoints/recordTypes'

import projectResponseSchema from 'sls-aws/src/descriptions/endpoints/schemas/projectResponseSchema'
import getProjectPayloadSchema from 'sls-aws/src/descriptions/endpoints/schemas/getProjectPayloadSchema'

export const payloadSchema = getProjectPayloadSchema
export const responseSchema = projectResponseSchema

export default {
	[GET_PROJECT]: {
		authentication: everyone,
		endpointType: recordEndpointType,
		recordType: project,
		payloadSchema,
		responseSchema,
	},
}
