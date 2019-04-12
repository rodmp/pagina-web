export default {
	type: 'object',
	properties: {
		stripeCardId: { type: 'string' },
		brand: { type: 'string' },
		lastFour: { type: 'string' },
		expMonth: { type: 'number' },
		expYear: { type: 'number' },
	},
	additionalProperties: false,
	required: ['stripeCardId'],
}
