import {
	GET_ACTIVE_PROJECTS,
} from 'sls-aws/src/shared/descriptions/endpoints/endpointIds'
import {
	ACTIVE_PROJECTS_LIST_MODULE_ID,
} from 'sls-aws/src/shared/descriptions/modules/moduleIds'
import { project } from 'sls-aws/src/shared/descriptions/endpoints/recordTypes'

export default {
	[ACTIVE_PROJECTS_LIST_MODULE_ID]: {
		moduleType: 'list',
		listType: 'card',
		recordType: project,
		endpointId: GET_ACTIVE_PROJECTS,
	},
}
