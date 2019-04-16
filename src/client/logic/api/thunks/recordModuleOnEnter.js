import { reduce, contains, path } from 'ramda'

import apiRequest from 'root/src/client/logic/api/thunks/apiRequest'
import moduleEndpointIdSelector from 'root/src/client/logic/api/selectors/moduleEndpointIdSelector'
import moduleRecordPayloadMapSelector from 'root/src/client/logic/api/selectors/moduleRecordPayloadMapSelector'


export default ({ moduleId, nextRouteObj }) => async (dispatch) => {
	const endpointId = moduleEndpointIdSelector({ /* state */ }, { moduleId })
	const payloadSubs = {
		recordId: path(['routeParams', 'recordId'], nextRouteObj),
	}
	const payloadItems = moduleRecordPayloadMapSelector(
		{ /* state */ }, { moduleId },
	)
	// @TODO replace this with util/subObj (also in recordClickAction)
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
