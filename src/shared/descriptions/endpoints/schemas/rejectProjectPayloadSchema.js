export default {
	type: 'object',
	properties: {
		projectId: { type: 'string' },
		assigneeId: {
			type: 'string',
		},
	},
	required: ['projectId', 'assigneeId'],
	additionalProperties: false,
}
