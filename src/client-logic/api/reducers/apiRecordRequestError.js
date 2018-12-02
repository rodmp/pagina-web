import { compose } from 'ramda'

import { API_LIST_REQUEST_SUCCESS } from 'sls-aws/src/client-logic/api/actionIds'
import createRecordStoreId from 'sls-aws/src/client-logic/api/util/createRecordStoreId'
import { apiStoreLenses } from 'sls-aws/src/client-logic/api/lenses'

const { setRecordErrorsChild, setRecordProcessingChild } = apiStoreLenses

export const apiRecordRequestError = (
	state,
	{ recordType, recordId, error },
) => {
	const recordStoreId = createRecordStoreId(recordType, recordId)
	return compose(
		setRecordErrorsChild(recordStoreId, error),
		setRecordProcessingChild(recordStoreId, false),
	)(state)
}

export default {
	[API_LIST_REQUEST_SUCCESS]: apiRecordRequestError,
}
