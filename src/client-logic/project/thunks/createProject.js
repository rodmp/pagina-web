export default formData => async (dispatch, getState) => {
	const { stripeCardId } = formData
	console.log('hello', stripeCardId)
	const stripeRes = await stripeCardId.createSource({
		type: 'card', usage: 'reusable', currency: 'usd',
	})
	console.log(stripeRes)
	return dispatch()
// 	const apiPayload = set(stripeSourceToken, token, formData)
// 	return await hitApi(ID, apiPayload)
}
