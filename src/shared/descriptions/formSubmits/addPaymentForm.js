import {
  MANAGE_PAYMENT_FORM_MODULE_ID,
} from 'root/src/shared/descriptions/modules/moduleIds'

import addPayment from 'root/src/client/logic/paymentMethod/thunks/addPayment'
import addPaymentOnSuccess from 'root/src/client/logic/paymentMethod/thunks/addPaymentOnSuccess'

export default {
  [MANAGE_PAYMENT_FORM_MODULE_ID]: [
    {
      action: addPayment,
      onSuccess: addPaymentOnSuccess,
    },
  ],
}
