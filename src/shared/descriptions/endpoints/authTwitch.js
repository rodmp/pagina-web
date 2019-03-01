import {
	GET_USERS_TWITCH,
} from 'root/src/shared/descriptions/endpoints/endpointIds'
// import { admin } from 'root/src/shared/constants/authenticationTypes'

import { externalEndpointType } from 'root/src/shared/descriptions/endpoints/lenses'
import { external } from 'root/src/shared/descriptions/endpoints/recordTypes'

import authTwitchPayloadSchema from 'root/src/shared/descriptions/endpoints/schemas/authTwitchPayloadSchema'
// import projectResponseSchema from 'root/src/shared/descriptions/endpoints/schemas/projectResponseSchema'

export const payloadSchema = authTwitchPayloadSchema
// export const responseSchema = projectResponseSchema

export default {
	[GET_USERS_TWITCH]: {
		// authentication: admin,
		endpointType: externalEndpointType,
		recordType: external,
		payloadSchema,
		// responseSchema,
	},
}
