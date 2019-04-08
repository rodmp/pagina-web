import { SORT_KEY } from 'root/src/shared/constants/apiDynamoIndexes'

export default ({ stripeCardId, brand, expMonth, expYear, lastFour }) => ({
	[SORT_KEY]: `paymentMethod|${stripeCardId}`,
	brand,
	expMonth,
	expYear,
	lastFour,
	isDefault: false,
})
