import apiRequest from 'sls-aws/src/client-logic/api/thunks/apiRequest'
import moduleEndpointIdSelector from 'sls-aws/src/client-logic/api/selectors/moduleEndpointIdSelector'

export default ({ moduleId }) => async (dispatch) => {
	const endpointId = moduleEndpointIdSelector({ /* state */ }, { moduleId })
	return dispatch(apiRequest(endpointId, {}))
}
