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
	if (nextRoute) {
		const state = getState()
		nextRoute = auditRouteFn(nextRoute, state)
			? nextRoute : defaultRouteFn()
	} else {
		nextRoute = defaultRouteFn()
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
