import { dissocPath, compose, set, lensProp, without, view } from 'ramda'

import {
	PLEDGE_PROJECT_FORM_MODULE_ID,
} from 'sls-aws/src/shared/descriptions/modules/moduleIds'

import pledgeProjectPayloadSchema from 'sls-aws/src/shared/descriptions/endpoints/schemas/pledgeProjectPayloadSchema'
import { PLEDGE_PROJECT } from 'sls-aws/src/shared/descriptions/endpoints/endpointIds'
import {
	VIEW_PROJECT_ROUTE_ID,
} from 'sls-aws/src/shared/descriptions/routes/routeIds'

export default {
	[PLEDGE_PROJECT_FORM_MODULE_ID]: {
		moduleType: 'form',
		schema: compose(
			dissocPath(['properties', 'projectId']),
			dissocPath(['properties', 'stripeCardId']),
			dissocPath(['additionalProperties']),
			set(
				lensProp('required'),
				without(
					['stripeCardId', 'projectId'],
					view(lensProp('required'), pledgeProjectPayloadSchema),
				),
			),
		)(pledgeProjectPayloadSchema),
		title: 'Payment Information',
		fields: [
			{
				fieldId: 'pledgeAmount',
				inputType: 'amountNumber',
				label: '$5',
				labelFieldText: [
					{
						text: 'Amount to Contribute (min. $5)',
					},
				],
			},
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
		preSubmitCaption: '*This is just a pledge and you’ll only be charged if the streamer delivers. If they don’t deliver, you won’t pay a thing!',
		submits: [
			{
				label: 'Confirm',
				endpointId: PLEDGE_PROJECT,
				onSuccessRecordUpdates: [{
					modification: 'set',
					path: [':recordStoreKey', 'myPledge'],
					valuePath: ['formData', 'pledgeAmount'],
				}],
				onSuccessRedirect: {
					routeId: VIEW_PROJECT_ROUTE_ID,
					routeParams: [
						['recordId', { $sub: ['resBody', 'id'] }],
					],
				},
			},
		],
		backButton: {
			label: 'Go back',
		},
	},
}
