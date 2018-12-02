import { API_RECORD_REQUEST_ERROR } from 'sls-aws/src/client-logic/api/actionIds'

export default (recordType, recordId, error) => ({
	type: API_RECORD_REQUEST_ERROR,
	payload: { recordType, recordId, error },
})
