import {
	AUDIT_PROJECT,
} from 'root/src/shared/descriptions/endpoints/endpointIds'
import { admin } from 'root/src/shared/constants/authenticationTypes'

import { recordEndpointType } from 'root/src/shared/descriptions/endpoints/lenses'
import { project } from 'root/src/shared/descriptions/endpoints/recordTypes'

import auditProjectPayloadSchema from 'root/src/shared/descriptions/endpoints/schemas/auditProjectPayloadSchema'
import projectResponseSchema from 'root/src/shared/descriptions/endpoints/schemas/projectResponseSchema'

export const payloadSchema = auditProjectPayloadSchema
export const responseSchema = projectResponseSchema

export default {
	[AUDIT_PROJECT]: {
		authentication: admin,
		endpointType: recordEndpointType,
		recordType: project,
		payloadSchema,
		responseSchema,
	},
}
