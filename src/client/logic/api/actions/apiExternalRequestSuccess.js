import { API_EXTERNAL_REQUEST_SUCCESS } from 'root/src/client/logic/api/actionIds'

export default (recordType, external) => ({
		type: API_EXTERNAL_REQUEST_SUCCESS,
		payload: { recordType, external },
	})
