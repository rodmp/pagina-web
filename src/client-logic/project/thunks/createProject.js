export default formData => async (dispatch, getState) => {
	const { stripeCardId } = formData
	const stripeRes = await stripeCardId.createToken({
		usage: 'reusable', currency: 'usd',
	})
	console.log(stripeRes)
// 	const apiPayload = set(stripeSourceToken, token, formData)
// 	return await hitApi(ID, apiPayload)
}
