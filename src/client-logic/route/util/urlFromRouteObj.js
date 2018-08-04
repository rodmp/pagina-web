import { view } from 'ramda'

import routes from 'sls-aws/src/descriptions/routes'
import createRouteUrlRegexes from 'sls-aws/src/client-logic/route/util/createRouteUrlRegexes'
import {
	routeIdToPathLens,
} from 'sls-aws/src/client-logic/route/lenses'

export const urlFromRouteObjHof = allRoutes => {
	const routeRegexes = createRouteUrlRegexes(allRoutes)
	return ({ routeId, routeParams }) => view(
		routeIdToPathLens(routeId),
		routeRegexes
	)(routeParams)
}

export default urlFromRouteObjHof(routes)
