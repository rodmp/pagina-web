import { API_FETCH_USER_DATA_SUCCESS } from 'root/src/client/logic/api/actionIds'

export default (recordStoreKey, userData, body) => ({
	type: API_FETCH_USER_DATA_SUCCESS,
	payload: { recordStoreKey, userData, body },
})
