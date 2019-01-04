import apiRequest from 'sls-aws/src/client-logic/api/thunks/apiRequest'

import { GET_PROJECT } from 'sls-aws/src/shared/descriptions/endpoints/endpointIds'

export default ({ nextRouteObj }) => async (dispatch) => {
	const { projectId } = nextRouteObj.routeParams
	return dispatch(apiRequest(GET_PROJECT, { projectId }))
}
