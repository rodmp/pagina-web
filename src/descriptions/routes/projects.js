import {
	CREATE_PROJECT_ROUTE_ID, VIEW_PROJECT_ROUTE_ID,
	PENDING_PROJECTS_ROUTE_ID, ACTIVE_PROJECTS_ROUTE_ID,
} from 'sls-aws/src/descriptions/routes/routeIds'

import {
	CREATE_PROJECT_FORM_MODULE_ID, VIEW_PROJECT_MODULE_ID,
	PENDING_PROJECTS_LIST_MODULE_ID, ACTIVE_PROJECTS_LIST_MODULE_ID,
} from 'sls-aws/src/descriptions/modules/moduleIds'

import { authValue } from 'sls-aws/src/client-logic/route/lenses'

export default {
	[CREATE_PROJECT_ROUTE_ID]: {
		url: '/create-project',
		authentication: authValue,
		modules: [
			CREATE_PROJECT_FORM_MODULE_ID,
		],
	},
	[VIEW_PROJECT_ROUTE_ID]: {
		url: '/view-project/:recordId',
		modules: [
			VIEW_PROJECT_MODULE_ID,
		],
	},
	[PENDING_PROJECTS_ROUTE_ID]: {
		url: '/pending-projects',
		authentication: authValue,
		modules: [
			PENDING_PROJECTS_LIST_MODULE_ID,
		],
	},
	[ACTIVE_PROJECTS_ROUTE_ID]: {
		url: '/projects',
		modules: [
			ACTIVE_PROJECTS_LIST_MODULE_ID,
		],
	},
}
