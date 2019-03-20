import createExternalStoreKey from 'root/src/client/logic/api/util/createExternalStoreKey'
import { apiStoreLenses } from 'root/src/client/logic/api/lenses'
import moduleEndpointIdSelector from 'root/src/client/logic/api/selectors/moduleEndpointIdSelector'
import determineToken from 'root/src/client/logic/api/util/determineToken'

const { viewUserDataChild } = apiStoreLenses

export default (state, props = {}) => {
	const { moduleId } = props
	const endpointId = moduleEndpointIdSelector(state, { moduleId })
	const token = determineToken(endpointId)
	const { username } = state.app.authenticated.accessToken.payload
	const data = {
		pk: `user-${username}`,
		sk: token,
	}
	const externalStoreKey = createExternalStoreKey(endpointId, data)
	return viewUserDataChild(externalStoreKey, state) || {}
}
