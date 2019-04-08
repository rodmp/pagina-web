import { API_EXTERNAL_REQUEST_FAILURE } from 'root/src/client/logic/api/actionIds'

export default error => ({
	type: API_EXTERNAL_REQUEST_FAILURE,
	payload: { error },
})
