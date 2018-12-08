import changeRoute from 'sls-aws/src/client-logic/route/actions/changeRoute'

export const popRouteHof = (
	changeRouteFn,
) => (nextRouteObj) => (dispatch, getState) => {
	const { routeId, routeParams } = nextRouteObj
	const state = getState()
	dispatch(runModuleMountsFn(nextRouteObj, state))
	dispatch(
		changeRouteFn(routeId, routeParams)
	)
	return Promise.resolve(nextRouteObj)
}

export default popRouteHof(
	changeRoute,
)

