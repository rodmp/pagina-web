import { dissocPath, compose, set, lensProp, without, view } from 'ramda'

import {
	CLAIM_PROJECT_FORM_MODULE_ID,
} from 'root/src/shared/descriptions/modules/moduleIds'

import { ACCEPT_PROJECT, REJECT_PROJECT } from 'root/src/shared/descriptions/endpoints/endpointIds'
import claimProjectSchemaSelector from 'root/src/shared/util/claimProjectSchemaSelector'
 
export default {
	[CLAIM_PROJECT_FORM_MODULE_ID]: {
		moduleType: 'form',
		schema: compose(
			dissocPath(['properties', 'projectId']),
			dissocPath(['properties', 'assigneeId']),
			dissocPath(['additionalProperties']),
			set(
				lensProp('required'),
				without(
					['projectId', 'assigneeId'],
					view(lensProp('required'), claimProjectSchemaSelector(ACCEPT_PROJECT)),
				),
			),
		)(claimProjectSchemaSelector(ACCEPT_PROJECT)),
		title: 'Accept the Dare',
		fields: [
			{
				fieldId: 'amountRequested',
				inputType: 'amountNumber',
				label: 'Enter amount',
				subFieldTopCaption: 'This is the amount your fans need to pledge in order for you to deliver. Only about 90% of charges are generally successful, take that into account when setting your goal.',
				labelFieldText: [
					{
						text: 'Amount Requested',
						required: true,
					},
				],
			},
		],
		submits: [
			{
				label: 'Accept',
				endpointId: ACCEPT_PROJECT,
			},
			{
				label: 'Reject',
				endpointId: REJECT_PROJECT,
				schema: compose(
					dissocPath(['properties', 'projectId']),
					dissocPath(['properties', 'assigneeId']),
					dissocPath(['additionalProperties']),
					set(
						lensProp('required'),
						without(
							['projectId', 'assigneeId'],
							view(lensProp('required'), claimProjectSchemaSelector(REJECT_PROJECT)),
						),
					),
				)(claimProjectSchemaSelector(REJECT_PROJECT)),
			},
		],
	},
}
