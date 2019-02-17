import {
	MARKETPLACE_BANNER_HEADER_MODULE_ID,
} from 'sls-aws/src/shared/descriptions/modules/moduleIds'

import {
	CREATE_PROJECT_ROUTE_ID,
} from 'sls-aws/src/shared/descriptions/routes/routeIds'

import marketplace from 'sls-aws/src/client/assets/Marketplace.png'

export default {
	[MARKETPLACE_BANNER_HEADER_MODULE_ID]: {
		moduleType: 'bannerHeader',
		bannerImage: marketplace,
		bannerImageText: 'Dare A Streamer',
		bannerSubText: 'Active Dares',
		link: {
			routeId: CREATE_PROJECT_ROUTE_ID,
			label: 'Create a New Dare +',
		},
	},
}
