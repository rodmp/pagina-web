import {
	GET_FAVORITES_LIST,
} from 'root/src/shared/descriptions/endpoints/endpointIds'

import { authenticated } from 'root/src/shared/constants/authenticationTypes'

import { listEndpointType } from 'root/src/shared/descriptions/endpoints/lenses'
import { projectList } from 'root/src/shared/descriptions/endpoints/recordTypes'


import projectResponseSchema from 'root/src/shared/descriptions/endpoints/schemas/projectResponseSchema'
import getProjectsListPayloadSchema from 'root/src/shared/descriptions/endpoints/schemas/getProjectsListPayloadSchema'

export const payloadSchema = getProjectsListPayloadSchema
export const responseSchema = projectResponseSchema

export default {
	[GET_FAVORITES_LIST]: {
		authentication: authenticated,
		endpointType: listEndpointType,
		recordType: projectList,
		payloadSchema,
		responseSchema,
	},
}
