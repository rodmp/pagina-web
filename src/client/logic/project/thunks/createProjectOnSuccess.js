import pushRoute from 'root/src/client/logic/route/thunks/pushRoute'

import {
	PLEDGE_PROJECT_ROUTE_ID,
} from 'root/src/shared/descriptions/routes/routeIds'

export default () => dispatch => dispatch(
	pushRoute(PLEDGE_PROJECT_ROUTE_ID),
)
