import {
	GET_ACTIVE_PROJECTS,
} from 'sls-aws/src/shared/descriptions/endpoints/endpointIds'

import { listEndpointType } from 'sls-aws/src/shared/descriptions/endpoints/lenses'
import { project } from 'sls-aws/src/shared/descriptions/endpoints/recordTypes'

import projectResponseSchema from 'sls-aws/src/shared/descriptions/endpoints/schemas/projectResponseSchema'

export const responseSchema = projectResponseSchema

export default {
	[GET_ACTIVE_PROJECTS]: {
		endpointType: listEndpointType,
		recordType: project,
		responseSchema,
	},
}
