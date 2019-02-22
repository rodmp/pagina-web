import { dissocPath, compose, set, lensProp, without, view } from 'ramda'
import {
	MANAGE_PAYMENT_FORM_MODULE_ID,
} from 'sls-aws/src/shared/descriptions/modules/moduleIds'
import addPaymentMethodPayloadSchema from 'sls-aws/src/shared/descriptions/endpoints/schemas/addPaymentMethodPayloadSchema'
import {
	MANAGE_PAYMENT_LIST_ROUTE_ID,
} from 'sls-aws/src/shared/descriptions/routes/routeIds'

export default {
	[MANAGE_PAYMENT_FORM_MODULE_ID]: {
		moduleType: 'form',
		schema: compose(
			dissocPath(['properties', 'stripeCardId']),
			dissocPath(['additionalProperties']),
			set(
				lensProp('required'),
				without(
					['stripeCardId'],
					view(lensProp('required'), addPaymentMethodPayloadSchema),
				),
			),
		)(addPaymentMethodPayloadSchema),
		title: 'Payment Information',
		fields: [
			{
				fieldId: 'cardName',
				inputType: 'text',
				label: 'Name',
				labelFieldText: [
					{
						text: 'Name on Credit Card',
						required: true,
					},
				],
			},
			{
				fieldId: 'stripeCardId',
				inputType: 'stripeCard',
				label: 'Credit Card',
			},
		],
		submits: [
			{
				label: 'Confirm',
			},
		],
		backButton: {
			label: 'Go Back',
			routeId: MANAGE_PAYMENT_LIST_ROUTE_ID,
		},
	},
}
