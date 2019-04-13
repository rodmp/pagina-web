import apiRequest from 'root/src/client/logic/api/thunks/apiRequest'
import moduleEndpointIdSelector from 'root/src/client/logic/api/selectors/moduleEndpointIdSelector'
import moduleFormPayloadMarSelector from 'root/src/client/logic/api/selectors/moduleFormPayloadMapSelector'

export default ({ moduleId }) => async (dispatch) => {
	const endpointId = moduleEndpointIdSelector({ /* state */ }, { moduleId })

	const payload = moduleFormPayloadMarSelector({}, { moduleId })
	return dispatch(apiRequest(endpointId, payload !== undefined ? payload : {}))
}
