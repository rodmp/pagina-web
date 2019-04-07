import { projectApprovedKey } from 'root/src/server/api/lenses'

import {
	APPROVE_PROJECT,
} from 'root/src/shared/descriptions/recordClickActions/recordClickActionIds'

import {
	AUDIT_PROJECT,
} from 'root/src/shared/descriptions/endpoints/endpointIds'

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
