export default {
	type: 'object',
	properties: {
		streamerUrl: { type: 'string' },
		title: {
			type: 'string',
			maxLength: 60,
			errorMessage: {
				maxLength: 'Title must be at most 60 characters',
			},
		},
		description: { type: 'string' },
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
		stripeCardId: { type: 'string' },
		pledgeAmount: { type: 'integer', minimum: 5, maximum: 999999 },
	},
	required: ['title', 'games'],
	additionalProperties: false,
}
