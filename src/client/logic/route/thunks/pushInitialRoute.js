import auditRoute from 'root/src/client/logic/route/util/auditRoute'
import getPathFromUrl from 'root/src/client/logic/route/util/getPathFromUrl'
import matchPath from 'root/src/client/logic/route/util/matchPath'
import defaultRoute from 'root/src/client/logic/route/util/defaultRoute'
import dispatchCommittedRoute from 'root/src/client/logic/route/util/dispatchCommittedRoute'
import runModuleMounts from 'root/src/client/logic/route/util/runModuleMounts'
import { browserHistoryReplace } from 'root/src/client/logic/route/lenses'

export const pushInitialRouteHof = (
	auditRouteFn,
	getPathFromUrlFn,
	matchPathFn,
	defaultRouteFn,
	dispatchCommittedRouteFn,
	runModuleMountsFn,
) => () => (dispatch, getState) => {
	let nextRoute = matchPathFn(getPathFromUrlFn())
	const state = getState()
	if (nextRoute) {
		nextRoute = auditRouteFn(nextRoute, state)
			? nextRoute : defaultRouteFn(state)
	} else {
		nextRoute = defaultRouteFn(state)
	}
	dispatch(runModuleMountsFn(nextRoute, state))
	return dispatchCommittedRouteFn(nextRoute, dispatch, browserHistoryReplace)
}

export default pushInitialRouteHof(
	auditRoute,
	getPathFromUrl,
	matchPath,
	defaultRoute,
	dispatchCommittedRoute,
	runModuleMounts,
)
