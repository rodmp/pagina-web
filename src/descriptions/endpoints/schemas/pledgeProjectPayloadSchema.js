export default {
	type: 'object',
	properties: {
		projectId: { type: 'string' },
		pledgeAmount: { type: 'integer' },
		stripeCardId: { type: 'string' },
	},
	required: ['projectId', 'pledgeAmount', 'stripeCardId'],
	additionalProperties: false,
}
