import { TERMS_OF_SERVICE_BANNER_HEADER_MODULE_ID } from 'root/src/shared/descriptions/modules/moduleIds'

import accountSettings from 'root/src/client/assets/accountSettings.png'

export default {
	[TERMS_OF_SERVICE_BANNER_HEADER_MODULE_ID]: {
		moduleType: 'bannerHeader',
		bannerImage: accountSettings,
		bannerImageText: 'Terms Of Service',
		bannerSubText: 'Rules for your use of Dare Drop',
	},
}
