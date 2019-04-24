import Stripe from 'stripe'

const stripe = Stripe('sk_test_NIa3D3VUTVrKEt1XsOXw5Ay9')


export default async (sourceId) => {
	try {
		const source = await stripe.sources.retrieve(sourceId)
		if (!source) {
			return false
		}
	} catch (err) {
		return false
	}
	return true
}
