import { remove } from 'ramda'

import { DELETE_PAYMENT_METHOD_ON_SUCCESS } from 'root/src/client/logic/list/actionIds'
import { GET_PAYMENT_METHODS } from 'root/src/shared/descriptions/endpoints/endpointIds'
import {
	apiStoreLenses,
} from 'root/src/client/logic/api/lenses'
import createPaymentMethodStoreKey from 'root/src/client/logic/list/util/createPaymentMethodStoreId'
import createListStoreKey from 'root/src/client/logic/api/util/createListStoreKey'

const { overRecordsChild } = apiStoreLenses

export default {
	[DELETE_PAYMENT_METHOD_ON_SUCCESS]: (state, { paymentMethodId }) => {
		const paymentMethodStoreKey = createPaymentMethodStoreKey(paymentMethodId)
		const listStoreKey = createListStoreKey(GET_PAYMENT_METHODS, {})
		// DIDNT KNEW HOW TO IMPLEMENT THIS WITH LENSES SO DID IT CLASSIC WAY
		// TO COMPLETELY DELETE RECORD FROM VIEW THERE IS A NEED TO DELETE
		// state.api.lists[listStoreKey].items
		// and state.api.records[paymentMethodStoreKey]
		const paymentMethods = state.api.lists[listStoreKey].items
		const modifiedPaymentMethods = paymentMethods.filter(method => method !== paymentMethodId)
		const newState = { ...state }
		newState.api.lists[listStoreKey].items = modifiedPaymentMethods
		delete newState.api.records[paymentMethodStoreKey]
		return newState
	},
}
