import {
	GET_PENDING_PROJECTS,
} from 'sls-aws/src/descriptions/endpoints/endpointIds'
import { admin } from 'sls-aws/src/constants/authenticationTypes'
import projectResponseSchema from 'sls-aws/src/descriptions/endpoints/schemas/projectResponseSchema'

export const responseSchema = projectResponseSchema

export default {
	[GET_PENDING_PROJECTS]: {
		authentication: admin,
		responseSchema,
	},
}
