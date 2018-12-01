import { INIT_API_REQUEST } from 'sls-aws/src/client-logic/api/actionIds'

export default (endpointId, payload) => ({
	type: INIT_API_REQUEST,
	payload: { endpointId, payload },
})
