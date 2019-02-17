import {
	HOW_IT_WORKS_ROUTE_ID,
} from 'sls-aws/src/shared/descriptions/routes/routeIds'

import {
	HOW_IT_WORKS_MODULE_ID,
	HOW_IT_WORK_BANNER_HEADER_MODULE_ID,
	BANNER_FOOTER_HOW_IT_WORKS_MODULE_ID,
} from 'sls-aws/src/shared/descriptions/modules/moduleIds'

export default {
	[HOW_IT_WORKS_ROUTE_ID]: {
		url: '/how-it-works',
		modules: [
			HOW_IT_WORK_BANNER_HEADER_MODULE_ID,
			HOW_IT_WORKS_MODULE_ID,
			BANNER_FOOTER_HOW_IT_WORKS_MODULE_ID,
		],
	},
}
