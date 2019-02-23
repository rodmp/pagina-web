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
	},
	required: ['title', 'games'],
	additionalProperties: false,
}
