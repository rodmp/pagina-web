export default {
	type: 'object',
	properties: {
		currentPassword: {
			type: 'string',
		},
		newPassword: {
			type: 'string',
			minLength: 6,
			pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\[\~\`\[#$^+\\\\=\\\]!*\_()@%&\{\}\?\/\.\>\,\<\;\:\'\"\|-]).{6,}$',
			errorMessage: {
				minLength: 'New password is too short',
				pattern: 'New password must contain at least one uppercase letter, one lowercase letter, one number and one special character',
			},
		},
		confirmPassword: {
			type: 'string',
			minLength: 6,
			pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\[\~\`\[#$^+\\\\=\\\]!*\_()@%&\{\}\?\/\.\>\,\<\;\:\'\"\|-]).{6,}$',
			const: {
				$data: '1/newPassword',
			},
			errorMessage: {
				minLength: 'New password is too short',
				pattern: 'New password must contain at least one uppercase letter, one lowercase letter, one number and one special character',
				const: 'Passwords must match',
			},
		},
	},
	required: ['currentPassword', 'newPassword', 'confirmPassword'],
	additionalProperties: false,
}
