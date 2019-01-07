import { compose } from 'ramda'

import { API_RECORD_REQUEST_SUCCESS } from 'sls-aws/src/client/logic/api/actionIds'
import createRecordStoreKey from 'sls-aws/src/client/logic/api/util/createRecordStoreKey'
import { apiStoreLenses, idProp } from 'sls-aws/src/client/logic/api/lenses'

const { setRecordsChild, setRecordProcessingChild } = apiStoreLenses

export const apiRecordRequestSuccess = (
	state,
	{ recordType, record },
) => {
	const recordId = idProp(record)
	const recordStoreId = createRecordStoreKey(recordType, recordId)
	return compose(
		setRecordsChild(recordStoreId, record),
		setRecordProcessingChild(recordStoreId, false),
	)(state)
}

export default {
	[API_RECORD_REQUEST_SUCCESS]: apiRecordRequestSuccess,
}
