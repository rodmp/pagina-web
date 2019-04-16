import { VIEW_PROJECT_MODULE_ID } from 'root/src/shared/descriptions/modules/moduleIds'
import { GET_PROJECT } from 'root/src/shared/descriptions/endpoints/endpointIds'

export default {
	[VIEW_PROJECT_MODULE_ID]: {
		moduleType: 'record',
		recordPageType: 'viewProject',
		endpointId: GET_PROJECT,
		recordPayloadMap: [
			['projectId', ':recordId'],
		],
	},
}
