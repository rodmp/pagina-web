import { equals } from 'ramda'
import apiRequest from 'root/src/client/logic/api/thunks/apiRequest'
import { DELETE_PAYMENT_METHOD } from 'root/src/shared/descriptions/endpoints/endpointIds'
import deletePaymentMethodOnSuccess from 'root/src/client/logic/list/actions/deletePaymentMethodOnSuccess'

export default payload => async (dispatch) => {
	const response = await dispatch(apiRequest(DELETE_PAYMENT_METHOD, payload))
	const { statusCode } = response
	if (equals(statusCode, 200)) {
		dispatch(deletePaymentMethodOnSuccess(payload))
	} else {
		// TODO
		console.log('Err')
	}
}
