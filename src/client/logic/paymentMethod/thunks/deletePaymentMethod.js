import apiRequest from 'root/src/client/logic/api/thunks/apiRequest'
import { DELETE_PAYMENT_METHOD } from 'root/src/shared/descriptions/endpoints/endpointIds'

export default paymentMethodId => async dispatch => dispatch(apiRequest(DELETE_PAYMENT_METHOD, paymentMethodId))
