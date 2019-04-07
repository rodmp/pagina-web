import pushRoute from 'root/src/client/logic/route/thunks/pushRoute'

import {
	DARE_CREATE_SUCCESS_ROUTE_ID,
} from 'root/src/shared/descriptions/routes/routeIds'

export default () => dispatch => dispatch(
	pushRoute(DARE_CREATE_SUCCESS_ROUTE_ID),
)
