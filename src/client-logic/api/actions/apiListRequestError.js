import { API_LIST_REQUEST_ERROR } from 'sls-aws/src/client-logic/api/actionIds'

export default (listTypeFilterHash, error) => ({
	type: API_LIST_REQUEST_ERROR,
	payload: { listTypeFilterHash, error },
})
