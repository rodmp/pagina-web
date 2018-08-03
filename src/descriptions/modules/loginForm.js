// import { cognitoLogin } from 'ff/src/logic/cognito/actions'

import { LOGIN_FORM_MODULE_ID } from 'sls-aws/src/descriptions/modules/moduleIds'

import loginSchema from 'sls-aws/src/descriptions/formSchemas/loginSchema'

export default {
	[LOGIN_FORM_MODULE_ID]: {
		type: 'form',
		schema: loginSchema,
		fields: [
			{ fieldId: 'email', inputType: 'text', textType: 'email' },
			{ fieldId: 'password', inputType: 'text', textType: 'password' },
		],
		submits: [
			// { label: 'Login', action: cognitoLogin(LOGIN_FORM_MODULE_ID) },
		]
	}
}
