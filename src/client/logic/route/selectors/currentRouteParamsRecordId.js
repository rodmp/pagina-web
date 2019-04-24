import {
	currentRouteIndex, routeStoreLenses, recordIdProp,
} from 'root/src/client/logic/route/lenses'

const { viewRouteParams } = routeStoreLenses

export default state => recordIdProp(viewRouteParams(currentRouteIndex, state))
