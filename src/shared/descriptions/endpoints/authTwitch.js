import {
	GET_USERS_TWITCH,
} from 'root/src/shared/descriptions/endpoints/endpointIds'
import { externalEndpointType } from 'root/src/shared/descriptions/endpoints/lenses'
import { external } from 'root/src/shared/descriptions/endpoints/recordTypes'

import authTwitchPayloadSchema from 'root/src/shared/descriptions/endpoints/schemas/authTwitchPayloadSchema'

import twitchAuthSchema from 'root/src/shared/descriptions/endpoints/schemas/twitchAuthSchema'

export const responseSchema = twitchAuthSchema
export const payloadSchema = authTwitchPayloadSchema

export default {
	[GET_USERS_TWITCH]: {
		endpointType: externalEndpointType,
		recordType: external,
		payloadSchema,
		responseSchema,
	},
}
