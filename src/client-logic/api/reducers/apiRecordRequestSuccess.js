import { API_REQUEST_RECORD_SUCCESS } from 'sls-aws/src/client-logic/api/actionIds'

export default (endpointId, payload) => ({
	type: API_REQUEST_RECORD_SUCCESS,
	payload: { endpointId, payload },
})
