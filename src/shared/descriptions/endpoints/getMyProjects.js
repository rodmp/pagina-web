import {
	GET_MY_PROJECTS,
} from 'root/src/shared/descriptions/endpoints/endpointIds'

import { listEndpointType } from 'root/src/shared/descriptions/endpoints/lenses'
import { project } from 'root/src/shared/descriptions/endpoints/recordTypes'

import projectResponseSchema from 'root/src/shared/descriptions/endpoints/schemas/projectResponseSchema'
import getProjectsListPayloadSchema from 'root/src/shared/descriptions/endpoints/schemas/getProjectsListPayloadSchema'

export const responseSchema = projectResponseSchema
export const payloadSchema = getProjectsListPayloadSchema

export default {
	[GET_MY_PROJECTS]: {
		endpointType: listEndpointType,
		recordType: project,
		responseSchema,
		payloadSchema,
	},
}
