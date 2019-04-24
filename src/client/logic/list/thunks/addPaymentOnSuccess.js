import pushRoute from 'root/src/client/logic/route/thunks/pushRoute'

import {
	MANAGE_PAYMENT_LIST_ROUTE_ID,
} from 'root/src/shared/descriptions/routes/routeIds'
import addPaymentMethodOnSuccess from 'root/src/client/logic/list/actions/addPaymentMethodOnSuccess'

export default payload => (dispatch) => {
	dispatch(pushRoute(MANAGE_PAYMENT_LIST_ROUTE_ID))
	return dispatch(addPaymentMethodOnSuccess(payload))
}
