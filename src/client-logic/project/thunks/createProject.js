export default async (formData, ) => {
	console.log(args, window.Stripe)
	const { token } = await stipeElement.createToken({
		usage: 'reusable', currency: 'usd',
	})
	const apiPayload = set(stripeSourceToken, token, formData)
	return await hitApi(ID, apiPayload)
}
