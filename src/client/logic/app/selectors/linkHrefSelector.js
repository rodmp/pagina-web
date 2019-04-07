import urlFromRouteObj from 'root/src/client/logic/route/util/urlFromRouteObj'

export default (state, { routeId, routeParams, href }) => {
	if (routeId) {
		return urlFromRouteObj({ routeId, routeParams })
	}
	return href
}
