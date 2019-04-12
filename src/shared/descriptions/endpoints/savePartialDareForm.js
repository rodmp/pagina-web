import {
	SAVE_PARTIAL_DARE_FORM,
} from 'root/src/shared/descriptions/endpoints/endpointIds'
import { authenticated } from 'root/src/shared/constants/authenticationTypes'

import { dbSaveEndpointType } from 'root/src/shared/descriptions/endpoints/lenses'
import { project } from 'root/src/shared/descriptions/endpoints/recordTypes'

import savePartialDarePayloadSchema from 'root/src/shared/descriptions/endpoints/schemas/savePartialDarePayloadSchema'
import getProjectPayloadSchema from 'root/src/shared/descriptions/endpoints/schemas/getProjectPayloadSchema'

export const payloadSchema = savePartialDarePayloadSchema
export const responseSchema = getProjectPayloadSchema

export default {
	[SAVE_PARTIAL_DARE_FORM]: {
		authentication: authenticated,
		endpointType: dbSaveEndpointType,
		recordType: project,
		payloadSchema,
		responseSchema,
	},
}
