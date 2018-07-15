import auditRoute from 'sls-aws/src/client-logic/route/util/auditRoute'
import defaultRoute from 'sls-aws/src/client-logic/route/util/defaultRoute'
import changeRoute from 'sls-aws/src/client-logic/route/actions/changeRoute'
import urlFromRouteObj from 'sls-aws/src/client-logic/route/util/urlFromRouteObj'
import isCurrentRoute from 'sls-aws/src/client-logic/route/util/isCurrentRoute'

import {
	changeBrowserHistory,
} from 'sls-aws/src/client-logic/route/util/browserHistory'

import {
	browserHistoryPush, browserHistoryReplace,
} from 'sls-aws/src/client-logic/route/lenses'

export const dispatchNewRouteHof = (
	auditRouteFn,
	defaultRouteFn,
	changeRouteFn,
	changeBrowserHistoryFn,
	urlFromRouteObjFn,
	isCurrentRouteFn,
	dispatchFn,
	getStateFn,
) => ({ routeId, routeParams = {} }, isInitial) => {
	let nextRouteObj  = { routeId, routeParams }
	let routeVetoed = false
	const state = getStateFn()
	if (!isCurrentRouteFn(nextRouteObj, state)) {
		if (!auditRouteFn(nextRouteObj)){
			routeVetoed = true
			nextRouteObj = defaultRouteFn()
		}
		let shouldModifyRoute = true
		if (routeVetoed){
			shouldModifyRoute = !isCurrentRouteFn(nextRouteObj, state)
		}
		if (shouldModifyRoute || isInitial) {
			dispatchFn(
				changeRouteFn(nextRouteObj.routeId, nextRouteObj.routeParams)
			)
			changeBrowserHistoryFn(
				(isInitial ? browserHistoryReplace : browserHistoryPush),
				urlFromRouteObjFn(nextRouteObj),
				nextRouteObj
			)
		}
	}
	// This is used in thunks so return resolve
	return Promise.resolve(nextRouteObj)
}

export default (dispatch, getState) => dispatchNewRouteHof(
	auditRoute,
	defaultRoute,
	changeRoute,
	changeBrowserHistory,
	urlFromRouteObj,
	isCurrentRoute,
	dispatch,
	getState,
)
