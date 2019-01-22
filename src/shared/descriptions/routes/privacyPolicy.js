import {
	PRIVACY_POLICY_ROUTE_ID,
} from 'sls-aws/src/shared/descriptions/routes/routeIds'

import {
	PRIVACY_POLICY_MODULE_ID,
} from 'sls-aws/src/shared/descriptions/modules/moduleIds'


export default {
	[PRIVACY_POLICY_ROUTE_ID]: {
		url: '/privacy-policy',
		modules: [
			PRIVACY_POLICY_MODULE_ID,
		],
	},
}
