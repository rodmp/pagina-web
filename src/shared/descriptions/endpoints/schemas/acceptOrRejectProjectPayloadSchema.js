import {
	projectAcceptedKey, projectStreamerRejectedKey,
} from 'root/src/server/api/lenses'

export default {
	type: 'object',
	properties: {
		projectId: { type: 'string' },
		accepted: {
			type: 'string',
			enum: [projectAcceptedKey, projectStreamerRejectedKey],
			errorMessage: {
				enum: 'bad choice',
			},
		},
		amountRequested: { type: 'number' },
	},
	required: ['projectId', 'accepted', 'amountRequested'],
	additionalProperties: false,
}
