import {
	GET_ACTIVE_PROJECTS,
} from 'root/src/shared/descriptions/endpoints/endpointIds'

import { listEndpointType } from 'root/src/shared/descriptions/endpoints/lenses'
import { project } from 'root/src/shared/descriptions/endpoints/recordTypes'

import projectResponseSchema from 'root/src/shared/descriptions/endpoints/schemas/projectResponseSchema'

export const responseSchema = projectResponseSchema

export default {
	[GET_ACTIVE_PROJECTS]: {
		endpointType: listEndpointType,
		recordType: project,
		responseSchema,
	},
}
