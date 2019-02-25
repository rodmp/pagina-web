import pushRoute from 'root/src/client/logic/route/thunks/pushRoute'
import subObj from 'root/src/shared/util/subObj'

export default (
	routeId, routeParamsArr = [], substitutes = {},
) => dispatch => dispatch(pushRoute(
	routeId, subObj(substitutes, routeParamsArr),
))
