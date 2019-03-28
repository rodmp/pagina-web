export default {
	type: 'object',
	properties: {
		password: {
			type: 'string',
		},
		newPassword: {
			type: 'string',
			minLength: 6,
			pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[ \[\~\`\[#$^+\\\\=\\\]!*\_()@%&\{\}\?\/\.\>\,\<\;\:\'\"\|-]).{6,}$',
			errorMessage: {
				minLength: 'New password is too short',
				pattern: 'New password must contain at least one uppercase letter, one lowercase letter, one number and one special character',
			},
		},
	},
	required: ['password', 'newPassword'],
	additionalProperties: false,
}
