import { INIT_API_LIST_REQUEST } from 'sls-aws/src/client-logic/api/actionIds'

export default (endpointId, payload) => ({
	type: INIT_API_LIST_REQUEST,
	payload: { endpointId, payload },
})
