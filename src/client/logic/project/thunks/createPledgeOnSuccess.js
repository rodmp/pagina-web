import pushRoute from 'root/src/client/logic/route/thunks/pushRoute'

import {
	PLEDGE_SUCCESS_PAGE_ROUTE_ID
} from 'root/src/shared/descriptions/routes/routeIds'

export default ({ body }) => dispatch => dispatch(
	pushRoute(PLEDGE_SUCCESS_PAGE_ROUTE_ID)
)
