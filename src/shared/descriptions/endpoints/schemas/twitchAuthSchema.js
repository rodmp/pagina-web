export default {
	type: 'object',
	properties: {
		displayName: {
			type: 'string',
		},
		login: {
			type: 'string',
		},
		thumbnail: {
			type: 'string',
		},
		id: {
			type: 'string',
		},
		token: {
			type: 'string',
		},
		status: {
			type: 'number',
		},
	},
	required: ['displayName', 'login', 'thumbnail', 'id', 'token', 'status'],
	additionalProperties: false,
}
