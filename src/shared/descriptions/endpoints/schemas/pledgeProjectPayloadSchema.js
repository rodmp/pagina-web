export default {
	type: 'object',
	properties: {
		pledgeAmount: {
			type: 'integer',
			minimum: 5,
			maximum: 999999,
			errorMessage: {
				minimum: 'Pledge amount must be at least $5.',
			},
		},
		cardName: { type: 'string' },
		stripeCardId: { type: 'string' },
	},
	required: ['pledgeAmount', 'cardName', 'stripeCardId'],
	additionalProperties: false,
}
