import {
	GET_PLEDGED_PROJECTS,
} from 'root/src/shared/descriptions/endpoints/endpointIds'

import { authenticated } from 'root/src/shared/constants/authenticationTypes'

import { listEndpointType } from 'root/src/shared/descriptions/endpoints/lenses'
import { projectList } from 'root/src/shared/descriptions/endpoints/recordTypes'


import projectResponseSchema from 'root/src/shared/descriptions/endpoints/schemas/projectResponseSchema'

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
