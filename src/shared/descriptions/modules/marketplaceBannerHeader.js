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
		bannerImageText: 'Challenge A Streamer',
		bannerSubText: 'Choose a Project',
		link: {
			routeId: CREATE_PROJECT_ROUTE_ID,
			label: 'Create New Project +',
		},
	},
}
