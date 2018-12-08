import createRecordStoreKey from 'sls-aws/src/client-logic/api/util/createRecordStoreKey'
import { apiStoreLenses } from 'sls-aws/src/client-logic/api/lenses'

const { viewRecordsChild } = apiStoreLenses

export default (state, { recordType, recordId }) => {
	const recordStoreId = createRecordStoreKey(recordType, recordId)
	return viewRecordsChild(recordStoreId, state)
}
