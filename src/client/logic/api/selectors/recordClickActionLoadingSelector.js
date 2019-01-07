import createRecordClickActionStoreKey from 'sls-aws/src/client/logic/api/util/createRecordClickActionStoreKey'
import { apiStoreLenses } from 'sls-aws/src/client/logic/api/lenses'

const { viewRecordClickActionProcessing } = apiStoreLenses

export default (state, { recordClickActionId, recordId }) => viewRecordClickActionProcessing(
	createRecordClickActionStoreKey(recordClickActionId, recordId),
	state,
)
