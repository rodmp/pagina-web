import changeRoute from 'sls-aws/src/client-logic/route/actions/changeRoute'
import urlFromRouteObj from 'sls-aws/src/client-logic/route/util/urlFromRouteObj'
import { storageClear } from 'sls-aws/src/util/storage'

import {
	changeBrowserHistory,
} from 'sls-aws/src/client-logic/route/util/browserHistory'

export const dispatchCommittedRouteHof = (
	changeRouteFn,
	changeBrowserHistoryFn,
	urlFromRouteObjFn,
) => (nextRouteObj, dispatchFn, changeType) => {
	const { routeId, routeParams } = nextRouteObj
	if (routeId === 'SIGN_OUT') {
		storageClear()
		window.location.reload(true)
	} else {
		dispatchFn(
			changeRouteFn(routeId, routeParams),
		)
		changeBrowserHistoryFn(
			changeType,
			urlFromRouteObjFn(nextRouteObj),
			nextRouteObj,
		)
	}
	// This is used in thunks so return resolve
	return Promise.resolve(nextRouteObj)
}

export default dispatchCommittedRouteHof(
	changeRoute,
	changeBrowserHistory,
	urlFromRouteObj,
)
