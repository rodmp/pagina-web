import moduleEndpointIdSelector from 'sls-aws/src/client-logic/api/selectors/moduleEndpointIdSelector'
import recordTypeSelector from 'sls-aws/src/client-logic/api/selectors/recordTypeSelector'
import createRecordStoreKey from 'sls-aws/src/client-logic/api/util/createRecordStoreKey'
import currentRouteParamsRecordId from 'sls-aws/src/client-logic/route/selectors/currentRouteParamsRecordId'

import { apiStoreLenses } from 'sls-aws/src/client-logic/api/lenses'

const { viewRecordsChild } = apiStoreLenses

export default (state, props = {}) => {
	const { moduleId, recordId } = props

	// From a list module we just pass in the recordId, for a record view we
	// have to get it from the current route params
	if (recordId) {
		return viewRecordsChild(recordId, state)
	}
	const paramsRecordId = currentRouteParamsRecordId(state)
	const endpointId = moduleEndpointIdSelector(state, { moduleId })
	const recordType = recordTypeSelector(endpointId)
	const recordStoreId = createRecordStoreKey(recordType, paramsRecordId)
	return viewRecordsChild(recordStoreId, state)
}
