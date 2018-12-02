import { API_RECORD_REQUEST_ERROR } from 'sls-aws/src/client-logic/api/actionIds'

export default (recordTypeRecordId, error) => ({
	type: API_RECORD_REQUEST_ERROR,
	payload: { recordTypeRecordId, error },
})
