import {
	ADD_TO_FAVORITES,
} from 'root/src/shared/descriptions/endpoints/endpointIds'
import { authenticated } from 'root/src/shared/constants/authenticationTypes'

import { recordEndpointType } from 'root/src/shared/descriptions/endpoints/lenses'
import { project } from 'root/src/shared/descriptions/endpoints/recordTypes'

import addToFavoritesPayloadSchema from 'root/src/shared/descriptions/endpoints/schemas/addToFavoritesPayloadSchema'
import getFavoritesListPayloadSchema from 'root/src/shared/descriptions/endpoints/schemas/getFavoritesListPayloadSchema'

export const payloadSchema = addToFavoritesPayloadSchema
export const responseSchema = getFavoritesListPayloadSchema

export default {
	[ADD_TO_FAVORITES]: {
		authentication: authenticated,
		endpointType: recordEndpointType,
		recordType: project,
		payloadSchema,
		responseSchema,
	},
}
