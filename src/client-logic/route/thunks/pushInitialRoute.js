import auditRoute from 'sls-aws/src/client-logic/route/util/auditRoute'
import getPathFromUrl from 'sls-aws/src/client-logic/route/util/getPathFromUrl'
import matchPath from 'sls-aws/src/client-logic/route/util/matchPath'
import defaultRoute from 'sls-aws/src/client-logic/route/util/defaultRoute'
import dispatchCommittedRoute from 'sls-aws/src/client-logic/route/util/dispatchCommittedRoute'
import { browserHistoryReplace } from 'sls-aws/src/client-logic/route/lenses'

export const pushInitialRouteHof = (
	auditRouteFn,
	getPathFromUrlFn,
	matchPathFn,
	defaultRouteFn,
	dispatchCommittedRouteFn,
) => () => (dispatch, getState) => {
	let nextRoute = matchPathFn(getPathFromUrlFn())
	const state = getState()
	if (nextRoute) {
		nextRoute = auditRouteFn(nextRoute, state)
			? nextRoute : defaultRouteFn(state)
	} else {
		nextRoute = defaultRouteFn(state)
	}
	return dispatchCommittedRouteFn(nextRoute, dispatch, browserHistoryReplace)
}

export default pushInitialRouteHof(
	auditRoute,
	getPathFromUrl,
	matchPath,
	defaultRoute,
	dispatchCommittedRoute,
)
