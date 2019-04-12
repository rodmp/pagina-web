import { equals } from 'ramda'
import apiRequest from 'root/src/client/logic/api/thunks/apiRequest'
import { SET_DEFAULT_PAYMENT_METHOD } from 'root/src/shared/descriptions/endpoints/endpointIds'
import setDefaultPaymentMethod from 'root/src/client/logic/list/actions/setDefaultPaymentMethod'

export default payload => async (dispatch) => {
	const response = await dispatch(apiRequest(SET_DEFAULT_PAYMENT_METHOD, payload))
	const { statusCode } = response
	if (equals(statusCode, 200)) { 
		dispatch(setDefaultPaymentMethod(payload))
	} else {
		// TODO
		console.log('Err')
	}
}
