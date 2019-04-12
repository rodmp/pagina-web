import { ADD_PAYMENT_METHOD_ON_SUCCESS } from 'root/src/client/logic/list/actionIds'
import { compose, prop } from 'ramda'
import createPaymentMethodStoreKey from 'root/src/client/logic/list/util/createPaymentMethodStoreId'
import { apiStoreLenses } from 'root/src/client/logic/api/lenses'

const { setRecordsChild } = apiStoreLenses

export default {
	[ADD_PAYMENT_METHOD_ON_SUCCESS]: (state, { body }) => {
		const paymentMethodStoreKey = compose(createPaymentMethodStoreKey, prop('stripeCardId'))(body)
		return (setRecordsChild(paymentMethodStoreKey, body, state))
	},
}
