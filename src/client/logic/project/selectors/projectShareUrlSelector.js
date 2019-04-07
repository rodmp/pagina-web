import urlFromRouteObj from 'root/src/client/logic/route/util/urlFromRouteObj'
import origin from 'root/src/shared/constants/origin'

import {
	VIEW_PROJECT_ROUTE_ID,
} from 'root/src/shared/descriptions/routes/routeIds'

export default (state, { recordId }) => {
	const localUrl = urlFromRouteObj({
		routeId: VIEW_PROJECT_ROUTE_ID,
		routeParams: { recordId },
	})
	return `${origin}${localUrl}`
}
