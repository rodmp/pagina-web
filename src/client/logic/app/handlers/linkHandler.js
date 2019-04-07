
export default (routeId, routeParams, pushRoute) => (e) => {
	if (routeId) {
		e.preventDefault()
		pushRoute(routeId, routeParams)
	}
}
