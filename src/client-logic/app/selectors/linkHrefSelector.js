import urlFromRouteObj from 'sls-aws/src/client-logic/route/util/urlFromRouteObj'

export default (state, { routeId, routeParams, href }) => {
	if (routeId) {
		return urlFromRouteObj({ routeId, routeParams })
	}
	return href
}
