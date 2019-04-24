import { browserHistoryPush } from 'root/src/client/logic/route/lenses'
import auditRoute from 'root/src/client/logic/route/util/auditRoute'
import runModuleMounts from 'root/src/client/logic/route/util/runModuleMounts'
import dispatchCommittedRoute from 'root/src/client/logic/route/util/dispatchCommittedRoute'
import defaultRoute from 'root/src/client/logic/route/util/defaultRoute'

export const pushRouteHof = (
	auditRouteFn,
	defaultRouteFn,
	dispatchCommittedRouteFn,
	runModuleMountsFn,
) => (routeId, routeParams) => (dispatch, getState) => {
	let nextRouteObj = { routeId, routeParams }
	const state = getState()
	if (nextRouteObj) {
		nextRouteObj = auditRouteFn(nextRouteObj, state)
			? nextRouteObj : defaultRouteFn(state)
	} else {
		nextRouteObj = defaultRouteFn(state)
	}
	dispatch(runModuleMountsFn(nextRouteObj, state))
	return dispatchCommittedRouteFn(
		nextRouteObj,
		dispatch,
		browserHistoryPush,
	)
}

export default pushRouteHof(
	auditRoute,
	defaultRoute,
	dispatchCommittedRoute,
	runModuleMounts,
)
