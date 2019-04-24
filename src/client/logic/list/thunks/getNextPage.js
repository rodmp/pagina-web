import apiRequest from 'root/src/client/logic/api/thunks/apiRequest'
import { add } from 'ramda'
import setHasMore from 'root/src/client/logic/list/actions/setHasMore'
import getCurrentModuleId from 'root/src/client/logic/route/util/getCurrentModuleId'
import getEndpointIdFromModules from 'root/src/client/logic/route/util/getEndpointIdFromModules'

export default (currentPage, hasMore) => async (dispatch) => {
	if (currentPage !== undefined && hasMore) {
		dispatch(setHasMore(false))
		const currentModuleId = getCurrentModuleId()
		const endpointId = getEndpointIdFromModules(currentModuleId)
		return dispatch(apiRequest(endpointId, { currentPage: add(currentPage, 1) }))
	}
}
