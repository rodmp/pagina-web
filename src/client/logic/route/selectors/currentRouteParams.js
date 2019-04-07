import {
	currentRouteIndex, routeStoreLenses,
} from 'root/src/client/logic/route/lenses'

const { viewRouteParams } = routeStoreLenses

export default viewRouteParams(currentRouteIndex)
