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
) => () => (dispatch) => {
	let nextRoute = matchPathFn(getPathFromUrlFn())
	if (nextRoute) {
		nextRoute = auditRouteFn(nextRoute) ? nextRoute : defaultRouteFn()
	} else {
		nextRoute = defaultRouteFn()
	}
	return dispatchCommittedRoute(nextRoute, dispatch, browserHistoryReplace)
}

export default pushInitialRouteHof(
	auditRoute,
	getPathFromUrl,
	matchPath,
	defaultRoute,
)

