import {
	TITLE_HEADER_MARKETPLACE_MODULE_ID,
} from 'root/src/shared/descriptions/modules/moduleIds'

import {
	CREATE_PROJECT_ROUTE_ID,
} from 'root/src/shared/descriptions/routes/routeIds'


export default {
	[TITLE_HEADER_MARKETPLACE_MODULE_ID]: {
		moduleType: 'bannerHeader',
		bannerSubText: 'Active Dares',
		createNewDareActive: true,
		link: {
			routeId: CREATE_PROJECT_ROUTE_ID,
			label: 'Create a New Dare +',
		},
	},
}
