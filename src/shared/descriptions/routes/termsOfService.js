import { TERMS_OF_SERVICE_ROUTE_ID } from 'sls-aws/src/shared/descriptions/routes/routeIds'

import {
	TERMS_OF_SERVICE_MODULE_ID,
	TERMS_OF_SERVICE_BANNER_HEADER_MODULE_ID,
} from 'sls-aws/src/shared/descriptions/modules/moduleIds'

export default {
	[TERMS_OF_SERVICE_ROUTE_ID]: {
		url: '/terms',
		modules: [TERMS_OF_SERVICE_BANNER_HEADER_MODULE_ID, TERMS_OF_SERVICE_MODULE_ID],
	},
}
