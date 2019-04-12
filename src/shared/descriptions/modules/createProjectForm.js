import { dissocPath, compose, set, lensProp, without, view } from 'ramda'

import {
	CREATE_PROJECT_FORM_MODULE_ID,
} from 'root/src/shared/descriptions/modules/moduleIds'

import { CREATE_PROJECT } from 'root/src/shared/descriptions/endpoints/endpointIds'
import createProjectPayloadSchema from 'root/src/shared/descriptions/endpoints/schemas/createProjectPayloadSchema'
import { formCommon } from 'root/src/shared/descriptions/modules/pledgeProjectForm'

export default {
	[CREATE_PROJECT_FORM_MODULE_ID]: {
		moduleType: 'stepForm',
		schema: compose(
			dissocPath(['properties', 'projectId']),
			dissocPath(['properties', 'stripeCardId']),
			dissocPath(['additionalProperties']),
			set(
				lensProp('required'),
				without(
					['stripeCardId'],
					view(lensProp('required'), createProjectPayloadSchema),
				),
			),
		)(createProjectPayloadSchema),
		forms: [
			{

				title: 'Dare a Streamer',
				fields: [
					{
						fieldId: 'assignees',
						maxItems: 10,
						inputType: 'autoComplete',
						optionsPromiseType: 'twitchChannels',
						placeholder: 'Select',
						labelFieldText: [
							{
								text: 'Select assignees',
								required: true,
							},
						],
					},
					{
						fieldId: 'title',
						inputType: 'text',
						label: 'My new dare Title',
						labelFieldText: [
							{
								text: 'Dare Title',
								subText: 'What do you want to see? :',
								required: true,
							},
						],
						inputMaxLength: 60,
					},
					{
						fieldId: 'description',
						inputType: 'text',
						label: 'My new dare Description',
						multiline: true,
						subFieldText: 'Make sure you describe what you want to see in detail so the streamer can deliver what you want.*',
						labelFieldText: [
							{
								text: 'Description',
							},
						],
					},
					{
						fieldId: 'games',
						maxItems: 1,
						inputType: 'autoComplete',
						optionsPromiseType: 'twitchGames',
						placeholder: 'Select',
						labelFieldText: [
							{
								text: 'Select video game',
								required: true,
							},
						],
					},
				],
			},
			formCommon,
		],
		preSubmitCaption: '*We take no responsibility for resolving discrepancies between intended project content and content which meet the requirement as stated.',
		submits: [
			{
				label: 'Confirm',
				endpointId: CREATE_PROJECT,
			},
		],
	},
}
