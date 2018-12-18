import { projectApprovedKey } from 'sls-aws/src/server/api/lenses'

import {
	APPROVE_PROJECT,
} from 'sls-aws/src/descriptions/recordClickActions/recordClickActionIds'

import {
	AUDIT_PROJECT,
} from 'sls-aws/src/descriptions/endpoints/endpointIds'

export default {
	[APPROVE_PROJECT]: {
		endpointId: AUDIT_PROJECT,
		payloadMap: [
			['projectId', ':recordId'],
			['audit', projectApprovedKey],
		],
		label: 'Approve',
		onSuccessRecordUpdates: [
			{
				modification: 'set',
				path: [':recordStoreKey', 'status'],
				value: projectApprovedKey,
			},
		],
	},
}
