import {
	CREATE_PROJECT,
} from 'root/src/shared/descriptions/endpoints/endpointIds'
import { authenticated } from 'root/src/shared/constants/authenticationTypes'

import { recordEndpointType } from 'root/src/shared/descriptions/endpoints/lenses'
import { project } from 'root/src/shared/descriptions/endpoints/recordTypes'

import createProjectPayloadSchema from 'root/src/shared/descriptions/endpoints/schemas/createProjectPayloadSchema'
import getProjectPayloadSchema from 'root/src/shared/descriptions/endpoints/schemas/getProjectPayloadSchema'

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
