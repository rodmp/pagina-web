import { ACCOUNT_SETTINGS_BANNER_HEADER_MODULE_ID } from 'root/src/shared/descriptions/modules/moduleIds'

import accountSettings from 'root/src/client/assets/accountSettings.png'

export default {
	[ACCOUNT_SETTINGS_BANNER_HEADER_MODULE_ID]: {
		moduleType: 'bannerHeader',
		bannerImage: accountSettings,
		bannerImageText: 'Account Settings',
	},
}
