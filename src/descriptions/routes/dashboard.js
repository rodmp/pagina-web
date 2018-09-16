import {
	DASHBOARD_ROUTE_ID,
} from 'sls-aws/src/descriptions/routes/routeIds'

import { authValue } from 'sls-aws/src/client-logic/route/lenses'

export default {
	[DASHBOARD_ROUTE_ID]: {
		url: '/dashboard',
		authentication: authValue,
		modules: [
			'DASHBOARD',
		],
	},
}
