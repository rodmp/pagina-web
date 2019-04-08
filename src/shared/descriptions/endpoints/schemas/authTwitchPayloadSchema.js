// import {
// 	projectApprovedKey, projectRejectedKey,
// } from 'root/src/server/api/lenses'

export default {
	type: 'object',
	properties: {
		authToken: { type: 'string' },
	},
	required: ['authToken'],
	additionalProperties: false,
}
