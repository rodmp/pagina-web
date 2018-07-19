import dispatchCommittedRoute from 'sls-aws/src/client-logic/route/util/dispatchCommittedRoute'
import { browserHistoryPush } from 'sls-aws/src/client-logic/route/lenses'

export const pushInitialRouteHof = (
	dispatchCommittedRouteFn,
) => (routeId, routeParams) => (dispatch) => dispatchCommittedRouteFn(
	{ routeId, routeParams },
	dispatch,
	browserHistoryPush
)

export default pushInitialRouteHof(dispatchCommittedRoute)
