import {
	REMOVE_TO_FAVORITES,
} from 'root/src/shared/descriptions/endpoints/endpointIds'
import { authenticated } from 'root/src/shared/constants/authenticationTypes'

import { recordEndpointType } from 'root/src/shared/descriptions/endpoints/lenses'
import { project } from 'root/src/shared/descriptions/endpoints/recordTypes'

import removeToFavoritesPayloadSchema from 'root/src/shared/descriptions/endpoints/schemas/removeToFavoritesPayloadSchema'
import projectResponseSchema from 'root/src/shared/descriptions/endpoints/schemas/projectResponseSchema'

export const payloadSchema = removeToFavoritesPayloadSchema
export const responseSchema = projectResponseSchema

export default {
	[REMOVE_TO_FAVORITES]: {
		authentication: authenticated,
		endpointType: recordEndpointType,
		recordType: project,
		payloadSchema,
		responseSchema,
	},
}
