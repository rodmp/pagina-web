import { RESET_PASSWORD_FORM_MODULE_ID } from 'sls-aws/src/shared/descriptions/modules/moduleIds'

import resetPasswordSchema from 'sls-aws/src/shared/descriptions/formSchemas/resetPasswordSchema'

export default {
	[RESET_PASSWORD_FORM_MODULE_ID]: {
		moduleType: 'form',
		schema: resetPasswordSchema,
		title: 'Verify and Create new Password',
		fields: [
			{
				fieldId: 'email',
				inputType: 'email',
				label: 'Email',
			},
			{
				fieldId: 'verificationCode',
				inputType: 'text',
				label: 'Verification Code',
			},
			{
				fieldId: 'password',
				label: 'Password',
				inputType: 'password',
			},
			{
				fieldId: 'confirm_password',
				label: 'Confirm password',
				inputType: 'password',
			},
		],
		submits: [
			{ label: 'Create new Password' },
		],
	},
}
