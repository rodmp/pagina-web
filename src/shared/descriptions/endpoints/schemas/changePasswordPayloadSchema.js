export default {
	type: 'object',
	properties: {
		password: {
			type: 'string',
		},
		newPassword: {
			type: 'string',
			minLength: 8,
			pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\[\~\`\[#$^+\\\\=\\\]!*\_()@%&\{\}\?\/\.\>\,\<\;\:\'\"\|-]).{8,}$',
			errorMessage: {
				minLength: 'New password must be at least 8 characters long and contain one uppercase letter, one lowercase letter, one number and one special character',
				pattern: 'New password must be at least 8 characters long and contain one uppercase letter, one lowercase letter, one number and one special character',
			},
		},
		confirmPassword: {
			type: 'string',
			minLength: 8,
			pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\[\~\`\[#$^+\\\\=\\\]!*\_()@%&\{\}\?\/\.\>\,\<\;\:\'\"\|-]).{8,}$',
			const: {
				$data: '1/newPassword',
			},
			errorMessage: {
				minLength: 'New password must be at least 8 characters long and contain one uppercase letter, one lowercase letter, one number and one special character',
				pattern: 'New password must be at least 8 characters long and contain one uppercase letter, one lowercase letter, one number and one special character',
				const: 'Passwords must match',
			},
		},
	},
	required: ['password', 'newPassword', 'confirmPassword'],
	additionalProperties: false,
}
