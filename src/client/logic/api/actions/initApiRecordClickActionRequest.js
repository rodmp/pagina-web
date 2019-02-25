import {
	INIT_API_RECORD_CLICK_ACTION_REQUEST,
} from 'root/src/client/logic/api/actionIds'

export default recordClickActionStoreKey => ({
	type: INIT_API_RECORD_CLICK_ACTION_REQUEST,
	payload: { recordClickActionStoreKey },
})
