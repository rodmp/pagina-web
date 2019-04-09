export default {
	type: 'object',
	properties: {
		projectId: { type: 'string' },
		pledgeAmount: {
			type: 'integer',
			minimum: 5,
			maximum: 999999,
			errorMessage: {
				minimum: 'Pledge amount must be at least $5.',
			},
		},
		stripeCardId: { type: 'string' },
		projectId: { type: 'string' },
	},
	required: ['pledgeAmount', 'stripeCardId'],
	additionalProperties: false,
}
