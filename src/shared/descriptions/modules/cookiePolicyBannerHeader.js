import { COOKIE_POLICY_BANNER_HEADER_MODULE_ID } from 'root/src/shared/descriptions/modules/moduleIds'

import accountSettings from 'root/src/client/assets/accountSettings.png'

export default {
	[COOKIE_POLICY_BANNER_HEADER_MODULE_ID]: {
		moduleType: 'bannerHeader',
		bannerImage: accountSettings,
		bannerImageText: 'Cookie Policy',
		bannerSubText: '',
	},
}
