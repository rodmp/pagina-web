import {
	CREATE_PROJECT,
} from 'sls-aws/src/shared/descriptions/endpoints/endpointIds'
import { authenticated } from 'sls-aws/src/shared/constants/authenticationTypes'

import { recordEndpointType } from 'sls-aws/src/shared/descriptions/endpoints/lenses'
import { project } from 'sls-aws/src/shared/descriptions/endpoints/recordTypes'

import createProjectPayloadSchema from 'sls-aws/src/shared/descriptions/endpoints/schemas/createProjectPayloadSchema'
import getProjectPayloadSchema from 'sls-aws/src/shared/descriptions/endpoints/schemas/getProjectPayloadSchema'

export const payloadSchema = createProjectPayloadSchema
export const responseSchema = getProjectPayloadSchema

export default {
	[CREATE_PROJECT]: {
		authentication: authenticated,
		endpointType: recordEndpointType,
		recordType: project,
		payloadSchema,
		responseSchema,
	},
}
