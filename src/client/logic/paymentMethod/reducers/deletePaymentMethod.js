import { DELETE_PAYMENT_METHOD } from 'root/src/client/logic/paymentMethod/actionIds'

export default {
	[DELETE_PAYMENT_METHOD]: (state, { paymentMethodId }) => paymentMethodId,
}
