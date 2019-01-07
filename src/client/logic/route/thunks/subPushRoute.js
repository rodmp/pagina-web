import pushRoute from 'sls-aws/src/client/logic/route/thunks/pushRoute'
import subObj from 'sls-aws/src/shared/util/subObj'

export default (
	routeId, routeParamsArr = [], substitutes = {},
) => dispatch => dispatch(pushRoute(
	routeId, subObj(substitutes, routeParamsArr),
))
