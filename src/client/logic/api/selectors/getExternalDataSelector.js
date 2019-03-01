import createExternalStoreKey from 'root/src/client/logic/api/util/createExternalStoreKey'
import { apiStoreLenses } from 'root/src/client/logic/api/lenses'
import moduleEndpointIdSelector from 'root/src/client/logic/api/selectors/moduleEndpointIdSelector'

const { viewExternalsChild } = apiStoreLenses

export default (state, props = {}) => {
	const { moduleId } = props
	const endpointId = moduleEndpointIdSelector(state, { moduleId })
	const externalStoreKey = createExternalStoreKey(endpointId)
	return viewExternalsChild(externalStoreKey, state) || {}
}
