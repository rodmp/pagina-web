import {
	CHANGE_ROUTE,
} from 'sls-aws/src/client/logic/route/actionIds'

const changeRoute = (routeId, routeParams) => ({
	type: CHANGE_ROUTE,
	payload: { routeId, routeParams },
})

export default changeRoute
