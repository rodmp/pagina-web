import changeRoute from 'root/src/client/logic/route/actions/changeRoute'
import urlFromRouteObj from 'root/src/client/logic/route/util/urlFromRouteObj'
import anchors from 'root/src/shared/constants/anchors'
import { storageClear } from 'root/src/shared/util/storage'

import {
	changeBrowserHistory,
} from 'root/src/client/logic/route/util/browserHistory'

export const dispatchCommittedRouteHof = (
	changeRouteFn,
	changeBrowserHistoryFn,
	urlFromRouteObjFn,
) => (nextRouteObj, dispatchFn, changeType) => {
	const { routeId, routeParams } = nextRouteObj

	window.scrollTo(anchors.TOP, anchors.TOP)
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
