export default {
	type: 'object',
	properties: {
		password: {
			type: 'string',
		},
		password2: {
			type: 'string',
		},
	},
	required: ['password', 'password2'],
	additionalProperties: false,
}
