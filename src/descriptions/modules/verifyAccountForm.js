import { VERIFY_ACCOUNT_FORM_MODULE_ID } from 'sls-aws/src/descriptions/modules/moduleIds'

import verifyAccountSchema from 'sls-aws/src/descriptions/formSchemas/verifyAccountSchema'
// import verifyAccount from 'sls-aws/src/client-logic/cognito/thunks/verifyAccount'

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
		// submits: [
		// 	{ label: 'Verify', action: verifyAccount },
		// ],
	},
}
