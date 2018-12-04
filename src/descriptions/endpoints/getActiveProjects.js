import {
	GET_ACTIVE_PROJECTS,
} from 'sls-aws/src/descriptions/endpoints/endpointIds'

import { everyone } from 'sls-aws/src/constants/authenticationTypes'

import { listEndpointType } from 'sls-aws/src/descriptions/endpoints/lenses'
import { project } from 'sls-aws/src/descriptions/endpoints/recordTypes'

import projectResponseSchema from 'sls-aws/src/descriptions/endpoints/schemas/projectResponseSchema'

export const responseSchema = projectResponseSchema

export default {
	[GET_ACTIVE_PROJECTS]: {
		authentication: everyone,
		endpointType: listEndpointType,
		recordType: project,
		responseSchema,
	},
}
