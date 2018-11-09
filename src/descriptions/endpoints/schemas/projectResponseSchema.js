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
					id: { type: 'string' },
					platform: {
						type: 'string',
						enum: ['twitch', 'youtube'],
					},
					image: { type: 'string' },
					description: { type: 'string' },
					platformId: { type: 'string' },
					displayName: { type: 'string' },
				},
				required: ['platform', 'image', 'platformId', 'id'],
			},
		},
	},
	required: ['id', 'title', 'image', 'description', 'pledgeAmount'],
}
