export default {
	type: 'object',
	properties: {
		id: { type: 'string' },
		title: { type: 'string' },
		image: { type: 'string' },
		description: { type: 'string' },
		pledgeAmount: { type: 'integer' },
		assignees: {
			type: 'array',
			items: {
				type: 'object',
				properties: {
					platform: {
						type: 'string',
						enum: ['twitch', 'youtube'],
					},
					image: { type: 'string' },
					description: { type: 'string' },
					platformId: { type: 'string' },
					displayName: { type: 'string' },
					username: { type: 'string' },
				},
				required: ['platform', 'image', 'platformId'],
				additionalProperties: false,
			},
		},
	},
	required: ['id', 'title', 'image', 'description', 'pledgeAmount'],
	additionalProperties: false,
}
