export default {
	type: 'object',
	properties: {
		email: {
			type: 'string',
			format: 'email',
    },
    password: {
			type: 'string',
			// format: 'password',
		},
	},
	required: ['email', 'password'],
	additionalProperties: false,
}
