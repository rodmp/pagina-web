import currentRouteId from 'root/src/client/logic/route/selectors/currentRouteId'
import currentRouteParams from 'root/src/client/logic/route/selectors/currentRouteParams'


export default (state, props) => ({
	routeId: currentRouteId(state, props),
	routeParams: currentRouteParams(state, props),
})
