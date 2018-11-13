import {
	PLEDGE_PROJECT,
} from 'sls-aws/src/descriptions/endpoints/endpointIds'
import { authenticated } from 'sls-aws/src/constants/authenticationTypes'

import pledgeProjectPayloadSchema from 'sls-aws/src/descriptions/endpoints/schemas/pledgeProjectPayloadSchema'
import projectResponseSchema from 'sls-aws/src/descriptions/endpoints/schemas/projectResponseSchema'

export const payloadSchema = pledgeProjectPayloadSchema
export const responseSchema = projectResponseSchema

export default {
	[PLEDGE_PROJECT]: {
		authentication: authenticated,
		payloadSchema,
		responseSchema,
	},
}
