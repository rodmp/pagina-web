export default {
	type: 'object',
	properties: {
		email: {
			type: 'string',
			format: 'email',
		},
		password: {
			type: 'string',
		},
		confirm_password: {
			type: 'string',
			const: {
				$data: '1/password'
			},
		},
	},
	required: ['email', 'password', 'confirm_password'],
	additionalProperties: false,
}
