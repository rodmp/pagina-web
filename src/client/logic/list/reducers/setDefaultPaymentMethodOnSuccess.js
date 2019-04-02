import { SET_DEFAULT_PAYMENT_METHOD_ON_SUCCESS } from 'root/src/client/logic/list/actionIds'
import { assocPath, path, lensProp, compose, map, set } from 'ramda'
import createPaymentMethodStoreKey from 'root/src/client/logic/list/util/createPaymentMethodStoreId'

export default {
	[SET_DEFAULT_PAYMENT_METHOD_ON_SUCCESS]: (state, { paymentMethodId }) => {
		const paymentMethodStoreKey = createPaymentMethodStoreKey(paymentMethodId)

		const isDefault = lensProp('isDefault')
		const paymentMethods = path(['api', 'records'], state)
		const setDefaultToFalse = set(isDefault, false)
		const mapDefaultToFalse = map(setDefaultToFalse, paymentMethods)

		return compose(
			assocPath(['api', 'records', paymentMethodStoreKey, 'isDefault'], true),
			assocPath(['api', 'records'], mapDefaultToFalse),
		)(state)
	},
}
