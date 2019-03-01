import createExternalStoreKey from 'root/src/client/logic/api/util/createExternalStoreKey'
import { apiStoreLenses } from 'root/src/client/logic/api/lenses'
import moduleEndpointIdSelector from 'root/src/client/logic/api/selectors/moduleEndpointIdSelector'

const { viewItems } = apiStoreLenses

export default (state, { moduleId }) => {
	const endpointId = moduleEndpointIdSelector(state, { moduleId })
	const externalStoreKey = createExternalStoreKey(endpointId, { /* filters */ })
	return viewItems(externalStoreKey, state) || []
}
