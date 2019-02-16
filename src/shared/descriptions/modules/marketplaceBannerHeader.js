import {
	MARKETPLACE_BANNER_HEADER_MODULE_ID,
} from 'sls-aws/src/shared/descriptions/modules/moduleIds'

import {
	CREATE_PROJECT_ROUTE_ID,
} from 'sls-aws/src/shared/descriptions/routes/routeIds'

import marketplace from 'sls-aws/src/client/assets/marketplace.png'

export default {
	[MARKETPLACE_BANNER_HEADER_MODULE_ID]: {
		moduleType: 'bannerHeader',
		bannerImage: marketplace,
		bannerImageText: 'Dare A Streamer',
		bannerImageSubText: 'Pledge to a Dare you like, or create your own!',
		bannerSubText: 'Active Dares',
		link: {
			routeId: CREATE_PROJECT_ROUTE_ID,
			label: 'Create a New Dare +',
		},
	},
}
