export default {
	type: 'object',
	properties: {
		userId: { type: 'string' },
		partialKeys: {
			type: 'array',
			uniqueItems: true,
			items: {
				type: 'string',
			},
		},
		required: ['userId', 'partialKeys'],
		additionalProperties: false,
	},
}
