import {
	API_RECORD_CLICK_ACTION_REQUEST_SUCCESS,
} from 'root/src/client/logic/api/actionIds'

import { apiStoreLenses } from 'root/src/client/logic/api/lenses'

const { setRecordClickActionProcessingChild } = apiStoreLenses

export const apiRecordClickActionRequestSuccess = (
	state,
	{ recordClickActionStoreKey },
) => setRecordClickActionProcessingChild(
	recordClickActionStoreKey,
	false,
	state,
)

export default {
	[API_RECORD_CLICK_ACTION_REQUEST_SUCCESS]: apiRecordClickActionRequestSuccess,
}
