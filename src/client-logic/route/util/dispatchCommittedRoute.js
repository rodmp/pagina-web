import changeRoute from 'sls-aws/src/client-logic/route/actions/changeRoute'
import urlFromRouteObj from 'sls-aws/src/client-logic/route/util/urlFromRouteObj'

import {
	changeBrowserHistory,
} from 'sls-aws/src/client-logic/route/util/browserHistory'

import {
	browserHistoryPush, browserHistoryReplace,
} from 'sls-aws/src/client-logic/route/lenses'

export const dispatchCommittedRouteHof = (
	changeRouteFn,
	changeBrowserHistoryFn,
	urlFromRouteObjFn,
) => (nextRouteObj, dispatchFn, changeType) => {
	dispatchFn(
		changeRouteFn(nextRouteObj.routeId, nextRouteObj.routeParams)
	)
	changeBrowserHistoryFn(
		changeType,
		urlFromRouteObjFn(nextRouteObj),
		nextRouteObj
	)
	// This is used in thunks so return resolve
	return Promise.resolve(nextRouteObj)
}

export default dispatchCommittedRouteHof(
	changeRoute,
	changeBrowserHistory,
	urlFromRouteObj,
)
