import pushRoute from 'root/src/client/logic/route/thunks/pushRoute'
import analyticsSendItem from 'root/src/client/util/analyticsSendItem'

import {
	PLEDGE_SUCCESS_PAGE_ROUTE_ID,
} from 'root/src/shared/descriptions/routes/routeIds'

export default ({ body }) => async (dispatch) => {
	analyticsSendItem(body, 'Pledge')
	return dispatch(
		pushRoute(PLEDGE_SUCCESS_PAGE_ROUTE_ID),
	)
}
