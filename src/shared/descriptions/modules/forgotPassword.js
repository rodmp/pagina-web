import { FORGOT_PASSWORD_FORM_MODULE_ID } from 'root/src/shared/descriptions/modules/moduleIds'

import forgotPasswordSchema from 'root/src/shared/descriptions/formSchemas/forgotPasswordSchema'

export default {
	[FORGOT_PASSWORD_FORM_MODULE_ID]: {
		moduleType: 'form',
		schema: forgotPasswordSchema,
		title: 'Reset Password',
		fields: [
			{
				fieldId: 'email',
				inputType: 'email',
				label: 'Email',
			},
		],
		submits: [
			{ label: 'Reset Password' },
		],
	},
}
