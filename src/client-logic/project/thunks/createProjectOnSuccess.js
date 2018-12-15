import pushRoute from 'sls-aws/src/client-logic/route/thunks/pushRoute'

import {
	VIEW_PROJECT_ROUTE_ID,
} from 'sls-aws/src/descriptions/routes/routeIds'

export default ({ body }) => dispatch => dispatch(
	pushRoute(VIEW_PROJECT_ROUTE_ID, { recordId: body.id }),
)
