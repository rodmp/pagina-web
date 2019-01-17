import urlFromRouteObj from 'sls-aws/src/client/logic/route/util/urlFromRouteObj'
import origin from 'sls-aws/src/shared/constants/origin'

import {
	VIEW_PROJECT_ROUTE_ID,
} from 'sls-aws/src/shared/descriptions/routes/routeIds'

export default (state, { recordId }) => {
	const localUrl = urlFromRouteObj({
		routeId: VIEW_PROJECT_ROUTE_ID,
		routeParams: { recordId },
	})
	return `${origin}${localUrl}`
}
