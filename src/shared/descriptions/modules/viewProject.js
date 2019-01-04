import { VIEW_PROJECT_MODULE_ID } from 'sls-aws/src/shared/descriptions/modules/moduleIds'
import { GET_PROJECT } from 'sls-aws/src/shared/descriptions/endpoints/endpointIds'

export default {
	[VIEW_PROJECT_MODULE_ID]: {
		moduleType: 'record',
		endpointId: GET_PROJECT,
		recordPayloadMap: [
			['projectId', ':recordId'],
		],
	},
}
