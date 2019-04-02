export default {
	type: 'object',
	properties: {
		projectId: { type: 'string' },
		description: { type: 'string' },
	},
	required: ['projectId', 'description'],
	additionalProperties: false,
}
