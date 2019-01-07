import {
	currentRouteIndex, routeStoreLenses,
} from 'sls-aws/src/client/logic/route/lenses'

const { viewRouteId } = routeStoreLenses

export default viewRouteId(currentRouteIndex)
