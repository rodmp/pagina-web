import apiRequest from 'root/src/client/logic/api/thunks/apiRequest'
import { add } from 'ramda'
import { GET_ACTIVE_PROJECTS } from 'root/src/shared/descriptions/endpoints/endpointIds'
import setHasMore from 'root/src/client/logic/list/actions/setHasMore'

export default (currentPage, hasMore) => async (dispatch) => {
	if (currentPage !== undefined && hasMore) {
		dispatch(setHasMore(false))
		return dispatch(apiRequest(GET_ACTIVE_PROJECTS, { currentPage: add(currentPage, 1) }))
	}
}
