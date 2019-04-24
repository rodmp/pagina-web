import { COOKIE_POLICY_ROUTE_ID } from 'root/src/shared/descriptions/routes/routeIds'

import {
	COOKIE_POLICY_MODULE_ID,
	COOKIE_POLICY_BANNER_HEADER_MODULE_ID,
} from 'root/src/shared/descriptions/modules/moduleIds'

export default {
	[COOKIE_POLICY_ROUTE_ID]: {
		url: '/cookie-policy',
		modules: [COOKIE_POLICY_BANNER_HEADER_MODULE_ID, COOKIE_POLICY_MODULE_ID],
	},
}
