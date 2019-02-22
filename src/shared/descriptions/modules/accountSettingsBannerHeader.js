import { ACCOUNT_SETTINGS_BANNER_HEADER_MODULE_ID } from 'sls-aws/src/shared/descriptions/modules/moduleIds'

import accountSettings from 'sls-aws/src/client/assets/accountSettings.png'

export default {
	[ACCOUNT_SETTINGS_BANNER_HEADER_MODULE_ID]: {
		moduleType: 'bannerHeader',
		bannerImage: accountSettings,
		bannerImageText: 'Account Settings',
	},
}
