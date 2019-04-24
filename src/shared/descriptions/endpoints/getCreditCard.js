import {
	GET_CARD_LIST,
} from 'root/src/shared/descriptions/endpoints/endpointIds'

import { project } from 'root/src/shared/descriptions/endpoints/recordTypes'
import { listEndpointType } from 'root/src/shared/descriptions/endpoints/lenses'
import creditCardListPayloadSchema from 'root/src/shared/descriptions/endpoints/schemas/creditCardListResponseSchema'

const responseSchema = creditCardListPayloadSchema

export default {
	[GET_CARD_LIST]: {
		endpointType: listEndpointType,
		recordType: project,
		responseSchema,
	},
}
