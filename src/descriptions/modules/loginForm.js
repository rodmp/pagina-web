import { LOGIN_FORM_MODULE_ID } from 'sls-aws/src/descriptions/modules/moduleIds'

import loginSchema from 'sls-aws/src/descriptions/formSchemas/loginSchema'

import {
	SIGN_UP_ROUTE_ID, FORGOT_PASSWORD_ROUTE_ID,
} from 'sls-aws/src/descriptions/routes/routeIds'

export default {
	[LOGIN_FORM_MODULE_ID]: {
		moduleType: 'form',
		title: 'Sign In',
		schema: loginSchema,
		postSubmitText: [
			'Don\'t have an account?',
			{ text: 'Sign Up', routeId: SIGN_UP_ROUTE_ID },
		],
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
				subFieldText: [
					{
						text: 'Forgot password?',
						routeId: FORGOT_PASSWORD_ROUTE_ID,
					},
				],
			},
		],
		submits: [
			{ label: 'Sign In' },
		],
	},
}
