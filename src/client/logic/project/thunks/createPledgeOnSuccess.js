import pushRoute from 'sls-aws/src/client/logic/route/thunks/pushRoute'

import {
	PLEDGE_SUCCESS_PAGE_ROUTE_ID
} from 'sls-aws/src/shared/descriptions/routes/routeIds'

export default ({ body }) => dispatch => dispatch(
	pushRoute(PLEDGE_SUCCESS_PAGE_ROUTE_ID)
)
