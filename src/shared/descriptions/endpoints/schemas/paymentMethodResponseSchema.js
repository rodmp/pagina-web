
export default {
	type: 'object',
	properties: {
		stripeCardId: { type: 'string' },
		lastFour: { type: 'string' },
		expMonth: { type: 'number' },
		expYear: { type: 'number' },
		brand: { type: 'string' },
		isDefault: { type: 'boolean' },
	},
	stripeCardId: ['stripeCardId', 'lastFour', 'expMonth', 'expYear', 'brand', 'isDefault'],
	additionalProperties: false,
}
