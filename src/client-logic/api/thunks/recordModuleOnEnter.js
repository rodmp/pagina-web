import { reduce, contains, path } from 'ramda'

import apiRequest from 'sls-aws/src/client-logic/api/thunks/apiRequest'
import moduleEndpointIdSelector from 'sls-aws/src/client-logic/api/selectors/moduleEndpointIdSelector'
import moduleRecordPayloadMapSelector from 'sls-aws/src/client-logic/api/selectors/moduleRecordPayloadMapSelector'


export default ({ moduleId, nextRouteObj }) => async (dispatch) => {
	const endpointId = moduleEndpointIdSelector({ /* state */ }, { moduleId })
	const payloadSubs = {
		recordId: path(['routeParams', 'recordId'], nextRouteObj),
	}
	const payloadItems = moduleRecordPayloadMapSelector(
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
