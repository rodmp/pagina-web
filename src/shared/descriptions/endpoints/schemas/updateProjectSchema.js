export default {
	type: 'object',
	properties: {
		projectId: { type: 'string' },
		description: { type: 'string' },
		title: { type: 'string' },
	},
	required: ['projectId', 'title', 'description'],
	additionalProperties: false,
}
