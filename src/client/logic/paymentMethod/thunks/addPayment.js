import apiRequest from 'root/src/client/logic/api/thunks/apiRequest'
import { ADD_PAYMENT_METHOD } from 'root/src/shared/descriptions/endpoints/endpointIds'

export default formData => async dispatch => dispatch(apiRequest(ADD_PAYMENT_METHOD, formData))
