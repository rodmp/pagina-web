export default {
	type: 'object',
	properties: {
		title: {
			type: 'string',
			maxLength: 60,
		},
		description: { type: 'string' },
		games: {
			type: 'array',
			minItems: 1,
			maxItems: 1,
			uniqueItems: true,
			items: {
				type: 'object',
				properties: {
					id: { type: 'integer' },
				},
				required: ['id'],
			},
		},
		assignees: {
			type: 'array',
			minItems: 1,
			maxItems: 10,
			uniqueItems: true,
			items: {
				type: 'object',
				properties: {
					id: {
						type: 'integer',
					},
				},
				required: ['id'],
			},
		},
		id: {
			type: 'string',
		},
	},
	required: ['title', 'description', 'games', 'assignees', 'id'],
	additionalProperties: true,
}
