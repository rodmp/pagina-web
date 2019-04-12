import {
	MARKETPLACE_BANNER_HEADER_MODULE_ID,
} from 'root/src/shared/descriptions/modules/moduleIds'

import {
	CREATE_PROJECT_ROUTE_ID,
} from 'root/src/shared/descriptions/routes/routeIds'

import marketplace from 'root/src/client/assets/Marketplace.jpg'


export default {
	[MARKETPLACE_BANNER_HEADER_MODULE_ID]: {
		moduleType: 'bannerHeader',
		bannerImage: marketplace,
		bannerImageText: 'Dare A Streamer',
		bannerImageSubText: 'Pledge to a Dare you like, or create your own!',
		textWithBg: true,
	},
}
