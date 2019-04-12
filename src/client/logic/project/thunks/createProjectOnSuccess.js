import pushRoute from 'root/src/client/logic/route/thunks/pushRoute'
import analyticsSendItem from 'root/src/client/util/analyticsSendItem'

import {
	DARE_CREATE_SUCCESS_ROUTE_ID,
} from 'root/src/shared/descriptions/routes/routeIds'

export default ({ body }) => async (dispatch) => {
	analyticsSendItem(body, 'Dare')
	return dispatch(
		pushRoute(DARE_CREATE_SUCCESS_ROUTE_ID),
	)
}
