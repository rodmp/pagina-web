import {
	CREATE_PROJECT,
} from 'sls-aws/src/descriptions/endpoints/endpointIds'
import { authenticated } from 'sls-aws/src/constants/authenticationTypes'

import createProjectPayloadSchema from 'sls-aws/src/descriptions/endpoints/schemas/createProjectPayloadSchema'
import getProjectPayloadSchema from 'sls-aws/src/descriptions/endpoints/schemas/getProjectPayloadSchema'

export const payloadSchema = createProjectPayloadSchema
export const responseSchema = getProjectPayloadSchema

export default {
	[CREATE_PROJECT]: {
		authentication: authenticated,
		payloadSchema,
		responseSchema,
	},
}
