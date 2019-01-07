
export default (recordId, routeParams, pushRoute) => (e) => {
	if (recordId) {
		e.preventDefault()
		pushRoute(recordId, routeParams)
	}
}
