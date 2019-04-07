import { PARTIAL_FORM_DB_SAVE_SUCCESS } from 'root/src/client/logic/form/actionIds'

export default (dbSaveKey, moduleKey, lambdaRes) => ({
	type: PARTIAL_FORM_DB_SAVE_SUCCESS,
	payload: { dbSaveKey, moduleKey, lambdaRes },
})
