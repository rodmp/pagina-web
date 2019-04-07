import { join } from 'ramda'

import { SIGN_UP_FORM_MODULE_ID } from 'root/src/shared/descriptions/modules/moduleIds'
import signUpSchema from 'root/src/shared/descriptions/formSchemas/signUpSchema'
import { LOGIN_ROUTE_ID } from 'root/src/shared/descriptions/routes/routeIds'

export default {
	[SIGN_UP_FORM_MODULE_ID]: {
		moduleType: 'form',
		schema: signUpSchema,
		title: 'Sign Up',
		subTitle: [
			'You have an account?',
			{ text: 'Sign In', routeId: LOGIN_ROUTE_ID },
		],
		preSubmitCaption: 'You will receive an email to verify your information',
		postSubmitCaption: join('', [
			'By signing up, you agree to our terms of use, privacy policy, and',
			'cookie policy. Our policies explain how we use your data to',
			'deliver, improve, and promote our service and our site, and how',
			'you can exercise your rights to control that use.',
		]),
		fields: [
			{
				fieldId: 'email',
				label: 'Email',
				inputType: 'email',
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
			{ label: 'Sign Up' },
		],
	},
}
