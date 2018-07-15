import dispatchNewRoute from 'sls-aws/src/client-logic/route/util/dispatchNewRoute'

export default (dispatch, getState) => (location) => (
	// get routeId / params from location.state or something
	dispatchNewRoute(dispatch, getState, { routeId, routeParams })
)
