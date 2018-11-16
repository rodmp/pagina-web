import {
	auditApprovedKey, auditRejectedKey,
} from 'sls-aws/src/server/api/lenses'

export default {
	type: 'object',
	properties: {
		projectId: { type: 'string' },
		audit: {
			type: 'string',
			enum: [auditApprovedKey, auditRejectedKey]
		},
	},
	required: ['projectId', 'audit'],
	additionalProperties: false,
}
