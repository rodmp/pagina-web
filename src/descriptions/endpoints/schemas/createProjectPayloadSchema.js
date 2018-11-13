export default {
	type: 'object',
	properties: {
		title: { type: 'string' },
		image: { type: 'string', format: 'uri' },
		description: { type: 'string' },
		stripeCardId: { type: 'string' },
		pledgeAmount: { type: 'integer' },
		assignees: {
			type: 'array',
			items: {
				type: 'object',
				minItems: 1,
				maxItems: 10,
				uniqueItems: true,
				properties: {
					url: {
						type: 'string',
						format: 'url',
						// pattern: '(twitch\.tv)|(youtube\.com)',
						pattern: '(twitch\.tv)',
					},
				},
				required: ['url'],
				additionalProperties: false,
			},
		},
	},
	required: [
		'title', 'image', 'description', 'assignees', 'pledgeAmount',
		'stripeCardId',
	],
	additionalProperties: false,
}
