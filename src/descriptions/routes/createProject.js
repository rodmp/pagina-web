import { CREATE_PROJECT_ROUTE_ID } from 'sls-aws/src/descriptions/routes/routeIds'

import {
	CREATE_PROJECT_FORM_MODULE_ID,
} from 'sls-aws/src/descriptions/modules/moduleIds'

import { authValue } from 'sls-aws/src/client-logic/route/lenses'

export default {
	[CREATE_PROJECT_ROUTE_ID]: {
		url: '/create-project',
		// authentication: authValue,
		modules: [
			CREATE_PROJECT_FORM_MODULE_ID,
		],
	},
}
