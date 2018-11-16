import {
	AUDIT_PROJECT,
} from 'sls-aws/src/descriptions/endpoints/endpointIds'
import { admin } from 'sls-aws/src/constants/authenticationTypes'

import auditProjectPayloadSchema from 'sls-aws/src/descriptions/endpoints/schemas/auditProjectPayloadSchema'
import projectResponseSchema from 'sls-aws/src/descriptions/endpoints/schemas/projectResponseSchema'

export const payloadSchema = auditProjectPayloadSchema
export const responseSchema = projectResponseSchema

export default {
	[AUDIT_PROJECT]: {
		authentication: admin,
		payloadSchema,
		responseSchema,
	},
}
