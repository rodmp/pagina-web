import { dissocPath, compose, set, lensProp, without, view } from 'ramda'

import {
	CREATE_PROJECT_FORM_MODULE_ID,
} from 'sls-aws/src/shared/descriptions/modules/moduleIds'

import createProjectPayloadSchema from 'sls-aws/src/shared/descriptions/endpoints/schemas/createProjectPayloadSchema'

export default {
	[CREATE_PROJECT_FORM_MODULE_ID]: {
		moduleType: 'form',
		schema: compose(
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
				multiline: true,
			},
			// {
			// 	fieldId: 'assignees',
			// 	inputType: 'subForm',
			// 	label: 'Assignees',
			// 	subFormFields: [
			// 		{
			// 			fieldId: 'url',
			// 			inputType: 'text',
			// 			label: 'Twitch streamer url',
			// 		},
			// 	],
			// },
			{
				fieldId: 'assignees',
				maxItems: 10,
				inputType: 'autoComplete',
				optionsPromiseType: 'twitchChannels',
				label: 'Assignees',
				placeholder: 'Search Twitch Channels',
			},
			{
				fieldId: 'games',
				maxItems: 1,
				inputType: 'autoComplete',
				optionsPromiseType: 'twitchGames',
				label: 'Game',
				placeholder: 'Search Games',
			},
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
				label: 'Create',
			},
		],
	},
}
