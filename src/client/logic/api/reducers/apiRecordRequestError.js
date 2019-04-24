import { compose } from 'ramda'

import { API_RECORD_REQUEST_ERROR } from 'root/src/client/logic/api/actionIds'
import createRecordStoreKey from 'root/src/client/logic/api/util/createRecordStoreKey'
import { apiStoreLenses } from 'root/src/client/logic/api/lenses'

const { setRecordErrorsChild, setRecordProcessingChild } = apiStoreLenses

export const apiRecordRequestError = (
	state,
	{ recordType, recordId, error },
) => {
	const recordStoreId = createRecordStoreKey(recordType, recordId)
	return compose(
		setRecordErrorsChild(recordStoreId, error),
		setRecordProcessingChild(recordStoreId, false),
	)(state)
}

export default {
	[API_RECORD_REQUEST_ERROR]: apiRecordRequestError,
}
