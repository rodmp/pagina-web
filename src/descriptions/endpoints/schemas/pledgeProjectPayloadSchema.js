export default {
	type: 'object',
	properties: {
		projectId: { type: 'string' },
		pledgeAmount: { type: 'integer', minimum: 5, maximum: 999999 },
		stripeCardId: { type: 'string' },
	},
	required: ['projectId', 'pledgeAmount', 'stripeCardId'],
	additionalProperties: false,
}
