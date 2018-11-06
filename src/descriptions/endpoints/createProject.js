import {
	CREATE_PROJECT,
} from 'sls-aws/src/descriptions/endpoints/endpointIds'
import { authenticated } from 'sls-aws/src/constants/authenticationTypes'

const payloadSchema = {
	type: 'object',
	properties: {
		title: { type: 'string' },
		image: { type: 'string', format: 'uri' },
		description: { type: 'string' },
		stripeCardId: { type: 'string' },
		pledgeAmount: { type: 'integer' },
		assignees: {
			type: 'array',
			items: {
				type: 'object',
				minItems: 1,
				maxItems: 10,
				uniqueItems: true,
				properties: {
					url: {
						type: 'string',
						format: 'uri',
						// pattern: '(twitch\.tv)|(youtube\.com)',
						pattern: '(twitch\.tv)'
					},
				},
				required: ['url'],
			},
		},
	},
	required: [
		'title', 'image', 'description', 'assignees', 'pledgeAmount',
		'stripeCardId',
	],
}

const responseSchema = {
	type: 'object',
	properties: {
		id: { type: 'string' },
		title: { type: 'string' },
		image: { type: 'string' },
		description: { type: 'string' },
		pledgeAmount: { type: 'integer' },
		assignees: {
			type: 'array',
			items: {
				type: 'object',
				properties: {
					platform: {
						type: 'string',
						enum: ['twitch', 'youtube'],
					},
					image: { type: 'string' },
					description: { type: 'string' },
					platformId: { type: 'string' },
					displayName: { type: 'string' },
				},
				required: ['platform', 'image', 'platformId'],
			},
		},
	},
	required: ['id', 'title', 'image', 'description', 'pledgeAmount'],
}

export { payloadSchema, responseSchema }

export default {
	[CREATE_PROJECT]: {
		authentication: authenticated,
		payloadSchema,
		responseSchema,
	},
}
