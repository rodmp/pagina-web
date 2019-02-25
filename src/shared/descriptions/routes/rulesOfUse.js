import { RULES_OF_USE_ROUTE_ID } from 'root/src/shared/descriptions/routes/routeIds'

import {
	RULES_OF_USE_MODULE_ID,
	RULES_OF_USE_BANNER_HEADER_MODULE_ID,
} from 'root/src/shared/descriptions/modules/moduleIds'

export default {
	[RULES_OF_USE_ROUTE_ID]: {
		url: '/rules-of-use',
		modules: [RULES_OF_USE_BANNER_HEADER_MODULE_ID, RULES_OF_USE_MODULE_ID],
	},
}
