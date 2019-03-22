import { compose } from 'ramda'

import { API_DB_SAVE_SUCCESS } from 'root/src/client/logic/api/actionIds'
import createDbSaveStoreKey from 'root/src/client/logic/api/util/createDbSaveStoreKey'
import { formStoreLenses } from 'root/src/client/logic/form/lenses'

const { viewFormChild, setFormChild } = formStoreLenses

export const apiRecordRequestSuccess = (
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
	[API_DB_SAVE_SUCCESS]: apiRecordRequestSuccess,
}
