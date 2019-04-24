import { view } from 'ramda'

import routes from 'root/src/shared/descriptions/routes'
import createRouteUrlRegexes from 'root/src/client/logic/route/util/createRouteUrlRegexes'
import {
	routeIdToPathLens,
} from 'root/src/client/logic/route/lenses'

export const urlFromRouteObjHof = (allRoutes) => {
	const routeRegexes = createRouteUrlRegexes(allRoutes)
	return ({ routeId, routeParams }) => view(
		routeIdToPathLens(routeId),
		routeRegexes,
	)(routeParams)
}

export default urlFromRouteObjHof(routes)
