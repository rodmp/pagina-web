import { API_LIST_REQUEST_ERROR } from 'root/src/client/logic/api/actionIds'

export default (listStoreKey, error) => ({
	type: API_LIST_REQUEST_ERROR,
	payload: { listStoreKey, error },
})
