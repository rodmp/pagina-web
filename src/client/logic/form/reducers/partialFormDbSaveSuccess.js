import { PARTIAL_FORM_DB_SAVE_SUCCESS } from 'root/src/client/logic/form/actionIds'
import createDbSaveStoreKey from 'root/src/client/logic/api/util/createDbSaveStoreKey'
import { formStoreLenses } from 'root/src/client/logic/form/lenses'

const { viewFormChild, setFormChild } = formStoreLenses

const partialFormDbSaveSuccess = (
	state,
	{ dbSaveKey, moduleKey, lambdaRes },
) => {
	const dbSaveStoreId = createDbSaveStoreKey(dbSaveKey)
	const record = {
		[dbSaveStoreId]: { ...lambdaRes },
	}
	const formChild = viewFormChild(`db-${moduleKey}`, state)
	return setFormChild(`db-${moduleKey}`, { ...formChild, ...record })(state)
}

export default {
	[PARTIAL_FORM_DB_SAVE_SUCCESS]: partialFormDbSaveSuccess,
}
