import { set, lensProp, path } from 'ramda'

import apiRequest from 'root/src/client/logic/api/thunks/apiRequest'

import { CREATE_PROJECT } from 'root/src/shared/descriptions/endpoints/endpointIds'

export default formData => async (dispatch) => {
	const { stripeCardId } = formData
	const stripeRes = await stripeCardId.createSource({
		type: 'card', usage: 'reusable', currency: 'usd',
	})
	const apiPayload = set(
		lensProp('stripeCardId'),
		path(['source', 'id'], stripeRes),
		formData,
	)
	return dispatch(apiRequest(CREATE_PROJECT, apiPayload))
}
