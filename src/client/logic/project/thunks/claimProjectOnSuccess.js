import pushRoute from 'root/src/client/logic/route/thunks/pushRoute'
import currentRouteParamsRecordId from 'root/src/client/logic/route/selectors/currentRouteParamsRecordId'
import { VIEW_PROJECT_ROUTE_ID } from 'root/src/shared/descriptions/routes/routeIds'

export default () => async (dispatch, getState) => {
	const state = getState()
	const recordId = currentRouteParamsRecordId(state)
	return dispatch(pushRoute(VIEW_PROJECT_ROUTE_ID, { recordId }))
}
