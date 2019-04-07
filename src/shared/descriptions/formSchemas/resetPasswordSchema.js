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
		password: {
			type: 'string',
		},
		confirm_password: {
			type: 'string',
			const: {
				$data: '1/password',
			},
		},
	},
	required: ['email', 'verificationCode', 'password', 'confirm_password'],
	additionalProperties: true,
}
