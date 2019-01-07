import {
	API_RECORD_CLICK_ACTION_REQUEST_SUCCESS,
} from 'sls-aws/src/client/logic/api/actionIds'

export default recordClickActionStoreKey => ({
	type: API_RECORD_CLICK_ACTION_REQUEST_SUCCESS,
	payload: { recordClickActionStoreKey },
})
