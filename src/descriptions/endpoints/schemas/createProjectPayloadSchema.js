export default {
	type: 'object',
	properties: {
		title: { type: 'string' },
		description: { type: 'string' },
		stripeCardId: { type: 'string' },
		pledgeAmount: { type: 'integer', minimum: 5, maximum: 999999 },
		games: {
			type: 'array',
			items: {
				type: 'object',
				minItems: 1,
				maxItems: 1,
				uniqueItems: true,
				properties: {
					id: { type: 'integer' },
				},
				required: ['id'],
			},
		},
		assignees: {
			type: 'array',
			items: {
				type: 'object',
				minItems: 1,
				maxItems: 10,
				uniqueItems: true,
				properties: {
					id: {
						type: 'integer',
						// format: 'url',
						// pattern: '(twitch\.tv)|(youtube\.com)',
						// pattern: '(twitch\.tv)',
					},
				},
				required: ['id'],
			},
		},
	},
	required: [
		'title', 'description', 'assignees', 'pledgeAmount', 'stripeCardId',
		'games',
	],
	additionalProperties: false,
}
