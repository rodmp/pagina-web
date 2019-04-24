import { projectRejectedKey } from 'root/src/server/api/lenses'

import { REJECT_ACTIVE_PROJECT } from 'root/src/shared/descriptions/recordClickActions/recordClickActionIds'

import { AUDIT_PROJECT } from 'root/src/shared/descriptions/endpoints/endpointIds'

export default {
	[REJECT_ACTIVE_PROJECT]: {
		endpointId: AUDIT_PROJECT,
		payloadMap: [
			['projectId', ':recordId'],
			['audit', projectRejectedKey],
		],
		label: 'Reject',
		onSuccessRecordUpdates: [
			{
				modification: 'set',
				path: [':recordStoreKey', 'status'],
				value: projectRejectedKey,
			},
		],
	},
}
