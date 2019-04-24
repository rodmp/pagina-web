import {
	UPDATE_PROJECT,
} from 'root/src/shared/descriptions/endpoints/endpointIds'

import { admin } from 'root/src/shared/constants/authenticationTypes'

import { recordEndpointType } from 'root/src/shared/descriptions/endpoints/lenses'
import { project } from 'root/src/shared/descriptions/endpoints/recordTypes'

import updateProjectSchema from 'root/src/shared/descriptions/endpoints/schemas/updateProjectSchema'
import projectResponseSchema from 'root/src/shared/descriptions/endpoints/schemas/projectResponseSchema'

export const payloadSchema = updateProjectSchema
export const responseSchema = projectResponseSchema

export default {
	[UPDATE_PROJECT]: {
		authentication: admin,
		endpointType: recordEndpointType,
		recordType: project,
		updateProjectSchema,
		responseSchema,
	},
}
