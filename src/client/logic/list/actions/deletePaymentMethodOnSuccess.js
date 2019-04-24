import { DELETE_PAYMENT_METHOD_ON_SUCCESS } from 'root/src/client/logic/list/actionIds'

export default paymentMethodId => ({
	type: DELETE_PAYMENT_METHOD_ON_SUCCESS,
	payload: { paymentMethodId },
})
