import Stripe from 'stripe';

const stripe = Stripe('sk_test_...');


export const validateStripeSource = async (sourceId) => {
    try {
        const source = await stripe.sources.retrieve(sourceId)
        if (!source) return false
    } catch (err) {
        return false
    }
    return true
}
