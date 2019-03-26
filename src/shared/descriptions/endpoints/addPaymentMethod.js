import {
	ADD_PAYMENT_METHOD,
} from 'root/src/shared/descriptions/endpoints/endpointIds'

import { recordEndpointType } from 'root/src/shared/descriptions/endpoints/lenses'
import { paymentMethod } from 'root/src/shared/descriptions/endpoints/recordTypes'
import addPaymentMethodPayloadSchema from 'root/src/shared/descriptions/endpoints/schemas/addPaymentMethodPayloadSchema'

export const payloadSchema = addPaymentMethodPayloadSchema

export default {
	[ADD_PAYMENT_METHOD]: {
		endpointType: recordEndpointType,
		recordType: paymentMethod,
		payloadSchema,
	},
}
