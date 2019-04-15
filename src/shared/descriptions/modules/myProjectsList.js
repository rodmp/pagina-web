import {
	GET_MY_PROJECTS,
} from 'root/src/shared/descriptions/endpoints/endpointIds'
import {
	MY_PROJECTS_LIST_MODULE_ID,
} from 'root/src/shared/descriptions/modules/moduleIds'
import { project } from 'root/src/shared/descriptions/endpoints/recordTypes'

export default {
	[MY_PROJECTS_LIST_MODULE_ID]: {
		moduleType: 'list',
		listType: 'card',
		listPayload: { currentPage: 1 },
		recordType: project,
		endpointId: GET_MY_PROJECTS,
	},
}
