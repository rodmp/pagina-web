import pushRoute from 'sls-aws/src/client/logic/route/thunks/pushRoute'

import {
	PLEDGE_PROJECT_ROUTE_ID,
} from 'sls-aws/src/shared/descriptions/routes/routeIds'

export default () => dispatch => dispatch(
	pushRoute(PLEDGE_PROJECT_ROUTE_ID),
)
