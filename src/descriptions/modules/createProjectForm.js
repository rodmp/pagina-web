import {
	CREATE_PROJECT_FORM_MODULE_ID,
} from 'sls-aws/src/descriptions/modules/moduleIds'

import createProjectPayloadSchema from 'sls-aws/src/descriptions/endpoints/schemas/createProjectPayloadSchema'
import login from 'sls-aws/src/client-logic/cognito/thunks/login'

export default {
	[CREATE_PROJECT_FORM_MODULE_ID]: {
		moduleType: 'form',
		schema: createProjectPayloadSchema,
		fields: [
			{
				fieldId: 'title',
				inputType: 'text',
				label: 'Title',
			},
			{
				fieldId: 'description',
				inputType: 'text',
				label: 'Description',
			},
			{
				fieldId: 'assignees',
				inputType: 'subForm',
				label: 'Assignees',
				subFormFields: [
					{
						fieldId: 'url',
						inputType: 'text',
						label: 'Twitch streamer url',
					},
				],
			},
			{
				fieldId: 'pledgeAmount',
				inputType: 'number',
				label: 'Pledge Amount',
			},
			{
				fieldId: 'stripeCardId',
				inputType: 'stripe',
				label: 'Credit Card',
			},
		],
		submits: [
			{ label: 'Create', action: login },
		],
	},
}
