import { INIT_API_LIST_REQUEST } from 'root/src/client/logic/api/actionIds'

export default listStoreKey => ({
	type: INIT_API_LIST_REQUEST,
	payload: { listStoreKey },
})
