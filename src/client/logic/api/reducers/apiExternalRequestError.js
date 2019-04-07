import { API_EXTERNAL_REQUEST_FAILURE } from 'root/src/client/logic/api/actionIds'

export const apiExternalRequestError = (state, { error }) => (state)

export default {
	[API_EXTERNAL_REQUEST_FAILURE]: apiExternalRequestError,
}
