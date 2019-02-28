import { API_EXTERNAL_REQUEST_SUCCESS } from 'root/src/client/logic/api/actionIds'

export default (recordType, record) => ({
	type: API_EXTERNAL_REQUEST_SUCCESS,
	payload: { recordType, record },
})
