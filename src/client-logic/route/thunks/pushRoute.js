import dispatchNewRoute from 'sls-aws/src/client-logic/route/util/dispatchNewRoute'

export default (dispatch, getState) => (routeId, routeParams) => (
	dispatchNewRoute(dispatch, getState, { routeId, routeParams })
)
