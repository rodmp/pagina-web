import {
	currentRouteIndex, routeStoreLenses
} from 'sls-aws/src/client-logic/route/lenses'

const { viewRouteParams } = routeStoreLenses

export default viewRouteParams(currentRouteIndex)
