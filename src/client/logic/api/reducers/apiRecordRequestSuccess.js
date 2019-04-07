import { compose } from 'ramda'

import { API_RECORD_REQUEST_SUCCESS } from 'root/src/client/logic/api/actionIds'
import createRecordStoreKey from 'root/src/client/logic/api/util/createRecordStoreKey'
import { apiStoreLenses, idProp } from 'root/src/client/logic/api/lenses'

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
