import { __, compose, prop } from 'ramda'

import routeDescriptions from 'sls-aws/src/shared/descriptions/routes'
import currentRouteId from 'sls-aws/src/client-logic/route/selectors/currentRouteId'

export const currentRouteDescriptionHof = routeDescriptionObj => compose(
	prop(__, routeDescriptionObj),
	currentRouteId,
)

export default currentRouteDescriptionHof(
	routeDescriptions,
)
