import {
	PLEDGE_PROJECT,
} from 'sls-aws/src/descriptions/endpoints/endpointIds'
import { authenticated } from 'sls-aws/src/constants/authenticationTypes'

import pledgeProjectPayloadSchema from 'sls-aws/src/descriptions/endpoints/schemas/pledgeProjectPayloadSchema'
import getProjectPayloadSchema from 'sls-aws/src/descriptions/endpoints/schemas/getProjectPayloadSchema'

export const payloadSchema = pledgeProjectPayloadSchema
export const responseSchema = getProjectPayloadSchema

export default {
	[PLEDGE_PROJECT]: {
		authentication: authenticated,
		payloadSchema,
		responseSchema,
	},
}
