import apiRequest from 'root/src/client/logic/api/thunks/apiRequest'
import { ADD_PAYMENT_METHOD } from 'root/src/shared/descriptions/endpoints/endpointIds'

export default formData => async (dispatch) => {
	const { stripeCardId } = formData
	const stripeRes = await stripeCardId.createSource({
		type: 'card', usage: 'reusable', currency: 'usd',
	})
	const apiPayload = {
		...formData,
		stripeCardId: stripeRes.source.id,
		brand: stripeRes.source.card.brand,
		lastFour: stripeRes.source.card.last4,
		expMonth: stripeRes.source.card.exp_month,
		expYear: stripeRes.source.card.exp_year,
	}

	return dispatch(apiRequest(ADD_PAYMENT_METHOD, apiPayload))
}
