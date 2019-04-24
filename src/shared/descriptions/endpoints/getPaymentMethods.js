import {
	GET_PAYMENT_METHODS,
} from 'root/src/shared/descriptions/endpoints/endpointIds'

import { listEndpointType } from 'root/src/shared/descriptions/endpoints/lenses'
import { paymentMethod } from 'root/src/shared/descriptions/endpoints/recordTypes'

export default {
	[GET_PAYMENT_METHODS]: {
		endpointType: listEndpointType,
		recordType: paymentMethod,
	},
}
