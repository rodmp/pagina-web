export default {
	type: 'object',
	properties: {
		cardName: { type: 'string' },
		stripeCardId: { type: 'string' },
	},
	required: ['cardName', 'stripeCardId'],
	additionalProperties: false,
}
