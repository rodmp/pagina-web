import {
	currentRouteIndex, routeStoreLenses, recordIdProp,
} from 'sls-aws/src/client/logic/route/lenses'

const { viewRouteParams } = routeStoreLenses

export default state => recordIdProp(viewRouteParams(currentRouteIndex, state))
