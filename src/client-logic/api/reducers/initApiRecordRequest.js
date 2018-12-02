import createRecordStoreId from 'sls-aws/src/client-logic/api/util/createRecordStoreId'

import { API_LIST_REQUEST_SUCCESS } from 'sls-aws/src/client-logic/api/actionIds'

import { apiStoreLenses } from 'sls-aws/src/client-logic/api/lenses'

const { setRecordProcessingChild } = apiStoreLenses

export const initApiRecordRequest = (
	state,
	{ recordType, recordId },
) => setRecordProcessingChild(
	createRecordStoreId(recordType, recordId),
	true,
	state,
)

export default {
	[API_LIST_REQUEST_SUCCESS]: initApiRecordRequest,
}
