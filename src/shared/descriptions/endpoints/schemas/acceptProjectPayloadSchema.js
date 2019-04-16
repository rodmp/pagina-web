export default {
	type: 'object',
	properties: {
		projectId: { type: 'string' },
		amountRequested: {
			type: 'number',
		},
		assigneeId: {
			type: 'string',
		},
	},
	required: ['projectId', 'amountRequested', 'assigneeId'],
	additionalProperties: false,
}
