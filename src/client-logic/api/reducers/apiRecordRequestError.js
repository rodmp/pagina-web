import { API_REQUEST_RECORD_ERROR } from 'sls-aws/src/client-logic/api/actionIds'

export default (endpointId, payload) => ({
	type: API_REQUEST_RECORD_ERROR,
	payload: { endpointId, payload },
})
