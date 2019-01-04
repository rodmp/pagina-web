import {
	GET_PLEDGED_PROJECTS,
} from 'sls-aws/src/shared/descriptions/endpoints/endpointIds'

import { authenticated } from 'sls-aws/src/shared/constants/authenticationTypes'

import { listEndpointType } from 'sls-aws/src/shared/descriptions/endpoints/lenses'
import { projectList } from 'sls-aws/src/shared/descriptions/endpoints/recordTypes'


import projectResponseSchema from 'sls-aws/src/shared/descriptions/endpoints/schemas/projectResponseSchema'

export const payloadSchema = {}
export const responseSchema = projectResponseSchema

export default {
	[GET_PLEDGED_PROJECTS]: {
		authentication: authenticated,
		endpointType: listEndpointType,
		recordType: projectList,
		payloadSchema,
		responseSchema,
	},
}
