import changeRoute from 'sls-aws/src/client-logic/route/actions/changeRoute'

export const popRouteHof = (
	changeRouteFn,
) => (routeObj) => (dispatch) => {
	dispatch(
		changeRouteFn(routeObj.routeId, routeObj.routeParams)
	)
	return Promise.resolve(routeObj)
}

export default popRouteHof(
	changeRoute,
)

