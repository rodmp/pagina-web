import { compose, __, isNil } from 'ramda'

import currentRoute from 'sls-aws/src/client-logic/route/selectors/currentRoute'
import {
	routeStoreLenses, routeDescriptionLenses,
} from 'sls-aws/src/client-logic/route/lenses'

const { viewRouteId, pathSatisfiesRouteId } = routeStoreLenses
const { viewUrl } = routeDescriptionLenses

export const currentRouteDescriptionHof = (
	routeDescriptionsObj
) => compose(
	viewUrl(__, routeDescriptionsObj),
	viewRouteId(0)
)
	
export const test = pathSatisfiesRouteId(0, isNil)
// export default currentRouteDescriptionHof(
// 	routeDescriptions
// )
