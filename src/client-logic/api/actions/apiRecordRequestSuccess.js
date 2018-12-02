import { API_RECORD_REQUEST_SUCCESS } from 'sls-aws/src/client-logic/api/actionIds'

export default (recordTypeRecordId, record) => ({
	type: API_RECORD_REQUEST_SUCCESS,
	payload: { recordTypeRecordId, record },
})
