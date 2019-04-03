import apiRequest from 'root/src/client/logic/api/thunks/apiRequest'

import { GET_ACTIVE_PROJECTS } from 'root/src/shared/descriptions/endpoints/endpointIds'


export default currentPage => async (dispatch) => {
	if (currentPage !== undefined) {
		return dispatch(apiRequest(GET_ACTIVE_PROJECTS, { currentPage }))
	}
}
