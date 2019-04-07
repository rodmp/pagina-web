export default {
	type: 'object',
	properties: {
		email: {
			type: 'string',
			format: 'email',
		},
		verificationCode: {
			type: 'string',
		},
	},
	required: ['email', 'verificationCode'],
	additionalProperties: false,
}
