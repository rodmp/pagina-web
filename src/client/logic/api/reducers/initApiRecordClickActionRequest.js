import {
	INIT_API_RECORD_CLICK_ACTION_REQUEST,
} from 'root/src/client/logic/api/actionIds'

import { apiStoreLenses } from 'root/src/client/logic/api/lenses'

const { setRecordClickActionProcessingChild } = apiStoreLenses

export const initApiRecordClickActionRequest = (
	state,
	{ recordClickActionStoreKey },
) => setRecordClickActionProcessingChild(
	recordClickActionStoreKey,
	true,
	state,
)

export default {
	[INIT_API_RECORD_CLICK_ACTION_REQUEST]: initApiRecordClickActionRequest,
}
