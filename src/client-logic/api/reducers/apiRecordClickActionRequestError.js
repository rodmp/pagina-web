import {
	API_RECORD_CLICK_ACTION_REQUEST_ERROR,
} from 'sls-aws/src/client-logic/api/actionIds'

import { apiStoreLenses } from 'sls-aws/src/client-logic/api/lenses'

const { setRecordClickActionProcessingChild } = apiStoreLenses

export const apiRecordClickActionRequestError = (
	state,
	{ recordClickActionStoreKey },
) => setRecordClickActionProcessingChild(
	recordClickActionStoreKey,
	false,
	state,
)

export default {
	[API_RECORD_CLICK_ACTION_REQUEST_ERROR]: apiRecordClickActionRequestError,
}
