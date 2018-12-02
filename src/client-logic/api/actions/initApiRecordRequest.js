import { INIT_API_RECORD_REQUEST } from 'sls-aws/src/client-logic/api/actionIds'

export default recordTypeRecordId => ({
	type: INIT_API_RECORD_REQUEST,
	payload: { recordTypeRecordId },
})
