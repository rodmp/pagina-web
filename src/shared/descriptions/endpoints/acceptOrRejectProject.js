import {
	ACCEPT_OR_REJECT_PROJECT,
} from 'root/src/shared/descriptions/endpoints/endpointIds'
import { authenticated } from 'root/src/shared/constants/authenticationTypes'

import { recordEndpointType } from 'root/src/shared/descriptions/endpoints/lenses'
import { project } from 'root/src/shared/descriptions/endpoints/recordTypes'

import acceptOrRejectProjectPayloadSchema from 'root/src/shared/descriptions/endpoints/schemas/acceptOrRejectProjectPayloadSchema'
import getProjectPayloadSchema from 'root/src/shared/descriptions/endpoints/schemas/getProjectPayloadSchema'

export const payloadSchema = acceptOrRejectProjectPayloadSchema
export const responseSchema = getProjectPayloadSchema

export default {
	[ACCEPT_OR_REJECT_PROJECT]: {
		authentication: authenticated,
		endpointType: recordEndpointType,
		recordType: project,
		payloadSchema,
		responseSchema,
	},
}
