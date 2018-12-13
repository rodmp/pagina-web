import { GET_PENDING_PROJECTS } from 'sls-aws/src/descriptions/endpoints/endpointIds'
import { PENDING_PROJECTS_LIST_MODULE_ID } from 'sls-aws/src/descriptions/modules/moduleIds'
import { project } from 'sls-aws/src/descriptions/endpoints/recordTypes'

export default {
	[PENDING_PROJECTS_LIST_MODULE_ID]: {
		moduleType: 'list',
		recordType: project,
		endpointId: GET_PENDING_PROJECTS,
		// listItemPrimary: ['title'],
		// listItemSecondary: ['secondary'],
		// onEnterActions: [stupidFn],
	},
}
