import { API_RECORD_REQUEST_SUCCESS } from 'sls-aws/src/client-logic/api/actionIds'

export default (recordType, record) => ({
	type: API_RECORD_REQUEST_SUCCESS,
	payload: { recordType, record },
})
