import {
	PLEDGE_PROJECT,
} from 'sls-aws/src/shared/descriptions/endpoints/endpointIds'

import { authenticated } from 'sls-aws/src/shared/constants/authenticationTypes'

import { recordEndpointType } from 'sls-aws/src/shared/descriptions/endpoints/lenses'
import { project } from 'sls-aws/src/shared/descriptions/endpoints/recordTypes'

import pledgeProjectPayloadSchema from 'sls-aws/src/shared/descriptions/endpoints/schemas/pledgeProjectPayloadSchema'
import projectResponseSchema from 'sls-aws/src/shared/descriptions/endpoints/schemas/projectResponseSchema'

export const payloadSchema = pledgeProjectPayloadSchema
export const responseSchema = projectResponseSchema

export default {
	[PLEDGE_PROJECT]: {
		authentication: authenticated,
		endpointType: recordEndpointType,
		recordType: project,
		payloadSchema,
		responseSchema,
	},
}
