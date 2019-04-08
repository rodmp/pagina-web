import { SET_DEFAULT_PAYMENT_METHOD_ON_SUCCESS } from 'root/src/client/logic/list/actionIds'

export default paymentMethodId => ({
	type: SET_DEFAULT_PAYMENT_METHOD_ON_SUCCESS,
	payload: { paymentMethodId },
})
