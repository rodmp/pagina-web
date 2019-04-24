import { COPYRIGHT_POLICY_ROUTE_ID } from 'root/src/shared/descriptions/routes/routeIds'

import {
	COPYRIGHT_POLICY_MODULE_ID,
	COPYRIGHT_POLICY_BANNER_HEADER_MODULE_ID,
} from 'root/src/shared/descriptions/modules/moduleIds'

export default {
	[COPYRIGHT_POLICY_ROUTE_ID]: {
		url: '/copyright-policy',
		modules: [COPYRIGHT_POLICY_BANNER_HEADER_MODULE_ID, COPYRIGHT_POLICY_MODULE_ID],
	},
}
