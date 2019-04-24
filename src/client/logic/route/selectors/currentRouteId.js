import {
	currentRouteIndex, routeStoreLenses,
} from 'root/src/client/logic/route/lenses'

const { viewRouteId } = routeStoreLenses

export default viewRouteId(currentRouteIndex)
