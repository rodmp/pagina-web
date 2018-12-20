import { dissocPath, compose, set, lensProp, without, view } from 'ramda'

import {
	PLEDGE_PROJECT_FORM_MODULE_ID,
} from 'sls-aws/src/descriptions/modules/moduleIds'

import pledgeProjectPayloadSchema from 'sls-aws/src/descriptions/endpoints/schemas/pledgeProjectPayloadSchema'
import { PLEDGE_PROJECT } from 'sls-aws/src/descriptions/endpoints/endpointIds'
import {
	VIEW_PROJECT_ROUTE_ID,
} from 'sls-aws/src/descriptions/routes/routeIds'

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
		fields: [
			{
				fieldId: 'pledgeAmount',
				inputType: 'number',
				label: 'Pledge Amount',
			},
			{
				fieldId: 'stripeCardId',
				inputType: 'stripeCard',
				label: 'Credit Card',
			},
		],
		submits: [
			{
				label: 'Pledge',
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
	},
}
