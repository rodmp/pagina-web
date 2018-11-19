import login from 'sls-aws/src/client-logic/cognito/thunks/login'
import { LOGIN_FORM_MODULE_ID } from 'sls-aws/src/descriptions/modules/moduleIds'

import loginSchema from 'sls-aws/src/descriptions/formSchemas/loginSchema'

export default {
	[LOGIN_FORM_MODULE_ID]: {
		moduleType: 'form',
		schema: loginSchema,
		fields: [
			{
				fieldId: 'email',
				inputType: 'email',
				label: 'Email',
			},
			{
				fieldId: 'password',
				inputType: 'password',
				label: 'Password',
			},
		],
		submits: [
			{ label: 'Login', action: login },
		],
	},
}
