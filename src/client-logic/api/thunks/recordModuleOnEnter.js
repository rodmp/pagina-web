import apiRequest from 'sls-aws/src/client-logic/api/thunks/apiRequest'
import moduleEndpointIdSelector from 'sls-aws/src/client-logic/api/selectors/moduleEndpointIdSelector'
import currentRouteParamsRecordId from 'sls-aws/src/client-logic/route/selectors/currentRouteParamsRecordId'


export default ({ moduleId }) => async (dispatch, getState) => {
	const state = getState()
	const endpointId = moduleEndpointIdSelector({ /* state */ }, { moduleId })
	const recordId = currentRouteParamsRecordId(state)
	return dispatch(apiRequest(endpointId, { recordId }))
}
