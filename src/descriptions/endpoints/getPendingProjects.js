import {
	GET_PENDING_PROJECTS,
} from 'sls-aws/src/descriptions/endpoints/endpointIds'

import { admin } from 'sls-aws/src/constants/authenticationTypes'

import { listEndpointType } from 'sls-aws/src/descriptions/endpoints/lenses'
import { projectList } from 'sls-aws/src/descriptions/endpoints/recordTypes'

import projectResponseSchema from 'sls-aws/src/descriptions/endpoints/schemas/projectResponseSchema'

export const responseSchema = projectResponseSchema

export default {
	[GET_PENDING_PROJECTS]: {
		authentication: admin,
		endpointType: listEndpointType,
		recordType: projectList,
		responseSchema,
	},
}
