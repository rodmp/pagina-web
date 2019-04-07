import {
	PLEDGE_PROJECT,
} from 'root/src/shared/descriptions/endpoints/endpointIds'

import { authenticated } from 'root/src/shared/constants/authenticationTypes'

import { recordEndpointType } from 'root/src/shared/descriptions/endpoints/lenses'
import { project } from 'root/src/shared/descriptions/endpoints/recordTypes'

import pledgeProjectPayloadSchema from 'root/src/shared/descriptions/endpoints/schemas/pledgeProjectPayloadSchema'
import projectResponseSchema from 'root/src/shared/descriptions/endpoints/schemas/projectResponseSchema'

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
