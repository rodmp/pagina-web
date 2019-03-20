import { reduce, contains, path } from 'ramda'

import apiRequest from 'root/src/client/logic/api/thunks/apiRequest'
import moduleEndpointIdSelector from 'root/src/client/logic/api/selectors/moduleEndpointIdSelector'
import moduleExternalPayloadMapSelector from 'root/src/client/logic/api/selectors/moduleExternalPayloadMapSelector'
import datermineParam from 'root/src/client/logic/api/util/determineParam'

export default ({ moduleId, nextRouteObj }) => async (dispatch) => {
	const endpointId = moduleEndpointIdSelector({ /* state */ }, { moduleId })
	const param = datermineParam(endpointId)
	const payloadSubs = {
		access_token: path(['routeParams', param], nextRouteObj),
	}
	const payloadItems = moduleExternalPayloadMapSelector(
		{ /* state */ }, { moduleId },
	)
	const payload = reduce(
		(result, [key, value]) => {
			if (contains(':', value)) {
				return { ...result, [key]: payloadSubs[value.substr(1)] }
			}
			return { ...result, [key]: value }
		},
		{},
		payloadItems,
	)
	return dispatch(apiRequest(endpointId, payload))
}
