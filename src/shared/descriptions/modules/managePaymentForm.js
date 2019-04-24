import { dissocPath, compose, set, lensProp, without, view } from 'ramda'

import {
	MANAGE_PAYMENT_FORM_MODULE_ID,
} from 'root/src/shared/descriptions/modules/moduleIds'
import addPaymentMethodPayloadSchema from 'root/src/shared/descriptions/endpoints/schemas/addPaymentMethodPayloadSchema'
import {
	MANAGE_PAYMENT_LIST_ROUTE_ID,
} from 'root/src/shared/descriptions/routes/routeIds'
import {
	ADD_PAYMENT_METHOD,
} from 'root/src/shared/descriptions/endpoints/endpointIds'


export default {
	[MANAGE_PAYMENT_FORM_MODULE_ID]: {
		moduleType: 'form',
		schema: compose(
			dissocPath(['properties', 'stripeCardId']),
			dissocPath(['properties', 'brand']),
			dissocPath(['properties', 'lastFour']),
			dissocPath(['properties', 'expMonth']),
			dissocPath(['properties', 'expYear']),
			dissocPath(['properties', 'isDefault']),
			dissocPath(['additionalProperties']),
			set(
				lensProp('required'),
				without(
					['stripeCardId', 'brand', 'lastFour', 'expMonth', 'expYear', 'isDefault'],
					view(lensProp('required'), addPaymentMethodPayloadSchema),
				),
			),
		)(addPaymentMethodPayloadSchema),
		title: 'Payment Information',
		fields: [
			{
				fieldId: 'stripeCardId',
				inputType: 'stripeCard',
				label: 'Credit Card',
			},
		],
		submits: [
			{
				label: 'Confirm',
				endpointId: ADD_PAYMENT_METHOD,
				buttonType: 'primarySquareButton',
			},
		],
		backButton: {
			label: 'Go Back',
			routeId: MANAGE_PAYMENT_LIST_ROUTE_ID,
		},
	},
}
