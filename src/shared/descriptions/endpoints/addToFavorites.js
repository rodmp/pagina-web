import {
	ADD_TO_FAVORITES,
} from 'root/src/shared/descriptions/endpoints/endpointIds'
import { authenticated } from 'root/src/shared/constants/authenticationTypes'

import { recordEndpointType } from 'root/src/shared/descriptions/endpoints/lenses'
import { project } from 'root/src/shared/descriptions/endpoints/recordTypes'

import addToFavoritesPayloadSchema from 'root/src/shared/descriptions/endpoints/schemas/addToFavoritesPayloadSchema'
import projectResponseSchema from 'root/src/shared/descriptions/endpoints/schemas/projectResponseSchema'

export const payloadSchema = addToFavoritesPayloadSchema
export const responseSchema = projectResponseSchema

export default {
	[ADD_TO_FAVORITES]: {
		authentication: authenticated,
		endpointType: recordEndpointType,
		recordType: project,
		payloadSchema,
		responseSchema,
	},
}
