import { set, lensProp } from 'ramda'

import apiRequest from 'sls-aws/src/client-logic/api/thunks/apiRequest'
import pushRoute from 'sls-aws/src/client-logic/route/thunks/pushRoute'

import { CREATE_PROJECT } from 'sls-aws/src/descriptions/endpoints/endpointIds'
import {
	VIEW_PROJECT_ROUTE_ID,
} from 'sls-aws/src/descriptions/routes/routeIds'

export default formData => async (dispatch) => {
	const { stripeCardId } = formData
	const stripeRes = await stripeCardId.createSource({
		type: 'card', usage: 'reusable', currency: 'usd',
	})
	const apiPayload = set(
		lensProp('stripeCardId'), stripeRes.source.id, formData,
	)
	const { body } = await dispatch(apiRequest(CREATE_PROJECT, apiPayload))
	return dispatch(pushRoute(VIEW_PROJECT_ROUTE_ID, { projectId: body.id }))
}
