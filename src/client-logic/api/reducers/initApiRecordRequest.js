import createRecordStoreKey from 'sls-aws/src/client-logic/api/util/createRecordStoreKey'

import { API_LIST_REQUEST_SUCCESS } from 'sls-aws/src/client-logic/api/actionIds'

import { apiStoreLenses } from 'sls-aws/src/client-logic/api/lenses'

const { setRecordProcessingChild } = apiStoreLenses

export const initApiRecordRequest = (
	state,
	{ recordType, recordId },
) => setRecordProcessingChild(
	createRecordStoreKey(recordType, recordId),
	true,
	state,
)

export default {
	[API_LIST_REQUEST_SUCCESS]: initApiRecordRequest,
}
