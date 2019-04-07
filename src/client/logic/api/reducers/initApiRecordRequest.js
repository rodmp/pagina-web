import createRecordStoreKey from 'root/src/client/logic/api/util/createRecordStoreKey'

import { INIT_API_RECORD_REQUEST } from 'root/src/client/logic/api/actionIds'

import { apiStoreLenses } from 'root/src/client/logic/api/lenses'

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
	[INIT_API_RECORD_REQUEST]: initApiRecordRequest,
}
