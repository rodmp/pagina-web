import getPathFromUrl from 'sls-aws/src/client-logic/route/util/getPathFromUrl'
import matchPath from 'sls-aws/src/client-logic/route/util/matchPath'
import dispatchNewRoute from 'sls-aws/src/client-logic/route/util/dispatchNewRoute'

export const pushInitialRouteHof = (
	dispatchFn,
	getStateFn,
	getPathFromUrlFn,
	matchPathFn,
) => () => {
	const routeObj = matchPathFn(getPathFromUrlFn())
	return dispatchNewRoute(dispatchFn, getStateFn, routeObj, true)
}

export default (dispatch, getState) => pushInitialRouteHof(
	dispatch,
	getState,
	getPathFromUrl,
	matchPath,
)

