import { API_LIST_REQUEST_SUCCESS } from 'sls-aws/src/client-logic/api/actionIds'

export default (listTypeFilterHash, recordType, list) => ({
	type: API_LIST_REQUEST_SUCCESS,
	payload: { listTypeFilterHash, recordType, list },
})