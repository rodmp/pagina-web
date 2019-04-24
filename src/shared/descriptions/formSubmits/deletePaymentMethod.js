import {
	MANAGE_PAYMENT_LIST_MODULE_ID,
} from 'root/src/shared/descriptions/modules/moduleIds'

import deletePaymentMethod from 'root/src/client/logic/paymentMethod/thunks/deletePaymentMethod'
import deletePaymentMethodOnSuccess from 'root/src/client/logic/paymentMethod/thunks/deletePaymentMethodOnSuccess'

export default {
	[MANAGE_PAYMENT_LIST_MODULE_ID]: [
		{
			action: deletePaymentMethod,
			onSuccess: deletePaymentMethodOnSuccess,
		},
	],
}
