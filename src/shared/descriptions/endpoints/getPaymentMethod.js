import {
	GET_PAYMENT_METHOD,
} from 'root/src/shared/descriptions/endpoints/endpointIds'

import { recordEndpointType } from 'root/src/shared/descriptions/endpoints/lenses'
import { paymentMethod } from 'root/src/shared/descriptions/endpoints/recordTypes'
import paymentMethodResponseSchema from 'root/src/shared/descriptions/endpoints/schemas/paymentMethodResponseSchema'

export const responseSchema = paymentMethodResponseSchema

export default {
	[GET_PAYMENT_METHOD]: {
		endpointType: recordEndpointType,
		recordType: paymentMethod,
		responseSchema,
	},
}
