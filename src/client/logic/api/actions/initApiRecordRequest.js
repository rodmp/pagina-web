import { INIT_API_RECORD_REQUEST } from 'root/src/client/logic/api/actionIds'

export default recordStoreKey => ({
	type: INIT_API_RECORD_REQUEST,
	payload: { recordStoreKey },
})
