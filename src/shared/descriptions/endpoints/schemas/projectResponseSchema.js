import {
	projectApprovedKey, projectRejectedKey, projectPendingKey,
} from 'root/src/server/api/lenses'

export default {
	type: 'object',
	properties: {
		id: { type: 'string' },
		title: { type: 'string' },
		image: { type: 'string' },
		description: { type: 'string' },
		pledgeAmount: { type: 'integer' },
		myPledge: { type: 'integer' },
		status: {
			type: 'string',
			enum: [projectApprovedKey, projectRejectedKey, projectPendingKey],
		},
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
		created: { type: 'string' },
		games: {
			type: 'array',
			items: {
				type: 'object',
				properties: {
					name: { type: 'string' },
					boxArtTemplateUrl: { type: 'string' },
				},
				required: ['name', 'boxArtTemplateUrl'],
				additionalProperties: false,
			},
		},
	},
	required: ['id', 'title', 'image', 'description', 'pledgeAmount', 'status'],
	additionalProperties: false,
}
