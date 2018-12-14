import createListStoreKey from 'sls-aws/src/client-logic/api/util/createListStoreKey'
import { apiStoreLenses } from 'sls-aws/src/client-logic/api/lenses'
import moduleEndpointIdSelector from 'sls-aws/src/client-logic/api/selectors/moduleEndpointIdSelector'

const { viewItems } = apiStoreLenses

export default (state, { moduleId }) => {
	const endpointId = moduleEndpointIdSelector(state, { moduleId })
	const listStoreKey = createListStoreKey(endpointId, { /* filters */ })
	return viewItems(listStoreKey, state) || []
}
