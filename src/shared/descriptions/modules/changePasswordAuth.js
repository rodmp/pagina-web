import { dissocPath, compose, set, lensProp, without, view } from 'ramda'
import {
	CHANGE_PASSWORD_AUTH_MODULE_ID,
} from 'root/src/shared/descriptions/modules/moduleIds'
import changePasswordPayloadSchema from 'root/src/shared/descriptions/endpoints/schemas/changePasswordPayloadSchema'
import ACCOUNT_SETTINGS_ROUTE_ID from 'root/src/shared/descriptions/routes/routeIds'

export default {
	[CHANGE_PASSWORD_AUTH_MODULE_ID]: {
		moduleType: 'form',
		formType: 'universalForm',
		schema: compose(
			dissocPath(['additionalProperties']),
			set(
				lensProp('required'),
				without(
					[],
					view(lensProp('required'), changePasswordPayloadSchema),
				),
			),
		)(changePasswordPayloadSchema),
		title: 'Login & Security',
		fields: [
			{
				fieldId: 'email',
				inputType: 'email',
				label: 'Email',
				placeholder: 'John.Doe@gmail.com',
			},
			{
				fieldId: 'password',
				inputType: 'password',
				label: 'Password',
				placeholder: '**********',
			},
		],
		submits: [
			{
				label: 'Change password',
				buttonType: 'primarySquareButton',
			},
		],
		backButton: {
			label: 'Go Back',
			routeId: ACCOUNT_SETTINGS_ROUTE_ID,
		},
	},
}
