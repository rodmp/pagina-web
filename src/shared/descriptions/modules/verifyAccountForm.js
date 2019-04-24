import { VERIFY_ACCOUNT_FORM_MODULE_ID } from 'root/src/shared/descriptions/modules/moduleIds'

import verifyAccountSchema from 'root/src/shared/descriptions/formSchemas/verifyAccountSchema'

export default {
	[VERIFY_ACCOUNT_FORM_MODULE_ID]: {
		moduleType: 'form',
		schema: verifyAccountSchema,
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
		],
		submits: [
			{ label: 'Verify' },
		],
	},
}
