import {
	MY_PROJECT_BANNER_HEADER_MODULE_ID,
} from 'sls-aws/src/shared/descriptions/modules/moduleIds'

import {
	CREATE_PROJECT_ROUTE_ID,
} from 'sls-aws/src/shared/descriptions/routes/routeIds'

import myDare from 'sls-aws/src/client/assets/Your-Dare.jpg'

export default {
	[MY_PROJECT_BANNER_HEADER_MODULE_ID]: {
		moduleType: 'bannerHeader',
		bannerImage: myDare,
		bannerImageText: 'DARE A STREAMER',
		bannerImageSubText: 'Pledge to a Dare you like, or create your own!',
		textWithBg: true,
		bannerSubText: 'Select a Dare',
		link: {
			routeId: CREATE_PROJECT_ROUTE_ID,
			label: 'Create a new Dare +',
		},
	},
}
