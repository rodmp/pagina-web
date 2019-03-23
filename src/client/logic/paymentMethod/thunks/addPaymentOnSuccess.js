import pushRoute from 'root/src/client/logic/route/thunks/pushRoute'

import {
	MANAGE_PAYMENT_LIST_ROUTE_ID,
} from 'root/src/shared/descriptions/routes/routeIds'

export default () => dispatch => dispatch(
	pushRoute(MANAGE_PAYMENT_LIST_ROUTE_ID),
)
