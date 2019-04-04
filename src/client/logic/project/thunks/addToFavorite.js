import { set, lensProp, path } from 'ramda'

import apiRequest from 'root/src/client/logic/api/thunks/apiRequest'

import { ADD_FAVORITE_PROJECT } from 'root/src/shared/descriptions/endpoints/endpointIds'

export default formData => async (dispatch) => {

	const apiPayload = set(
		lensProp('stripeCardId'),
		path(['source', 'id'], stripeRes),
		formData,
	)
	return dispatch(apiRequest(ADD_FAVORITE_PROJECT, apiPayload))
}
