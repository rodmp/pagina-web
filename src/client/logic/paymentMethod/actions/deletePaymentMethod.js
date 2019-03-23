import { DELETE_PAYMENT_METHOD } from 'root/src/client/logic/paymentMethod/actionIds'

export default paymentMethodId => ({
	type: DELETE_PAYMENT_METHOD,
	payload: { paymentMethodId },
})
 