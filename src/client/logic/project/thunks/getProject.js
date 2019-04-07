import apiRequest from 'root/src/client/logic/api/thunks/apiRequest'

import { GET_PROJECT } from 'root/src/shared/descriptions/endpoints/endpointIds'

export default ({ nextRouteObj }) => async (dispatch) => {
	const { projectId } = nextRouteObj.routeParams
	return dispatch(apiRequest(GET_PROJECT, { projectId }))
}
