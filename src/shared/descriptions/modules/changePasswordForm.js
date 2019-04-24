import { dissocPath, compose, set, lensProp, without, view } from 'ramda'
import {
	CHANGE_PASSWORD_FORM_MODULE_ID,
} from 'root/src/shared/descriptions/modules/moduleIds'
import changePasswordPayloadSchema from 'root/src/shared/descriptions/endpoints/schemas/changePasswordPayloadSchema'
import { ACCOUNT_SETTINGS_ROUTE_ID } from 'root/src/shared/descriptions/routes/routeIds'

export default {
	[CHANGE_PASSWORD_FORM_MODULE_ID]: {
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
		title: 'Change Password',
		subTitle: 'Enter your new password',
		fields: [
			{
				fieldId: 'password',
				inputType: 'password',
				placeholder: 'Current Password',
			},
			{
				fieldId: 'newPassword',
				inputType: 'password',
				placeholder: 'New Password',
			},
			{
				fieldId: 'confirmPassword',
				inputType: 'password',
				placeholder: 'Confirm Password',
			},
		],
		submits: [
			{
				label: 'Confirm',
				buttonType: 'primarySquareButton',
			},
		],
		backButton: {
			routeId: ACCOUNT_SETTINGS_ROUTE_ID,
			label: 'Go Back',
		},
	},
}
