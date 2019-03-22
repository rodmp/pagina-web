import { API_DB_SAVE_SUCCESS } from 'root/src/client/logic/api/actionIds'

export default (dbSaveKey, moduleKey, lambdaRes) => ({
	type: API_DB_SAVE_SUCCESS,
	payload: { dbSaveKey, moduleKey, lambdaRes },
})
