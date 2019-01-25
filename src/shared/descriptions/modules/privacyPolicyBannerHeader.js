import { PRIVACY_POLICY_BANNER_HEADER_MODULE_ID } from 'sls-aws/src/shared/descriptions/modules/moduleIds'

import accountSettings from 'sls-aws/src/client/assets/accountSettings.png'

export default {
	[PRIVACY_POLICY_BANNER_HEADER_MODULE_ID]: {
		moduleType: 'bannerHeader',
		bannerImage: accountSettings,
		bannerImageText: 'Privacy Policy',
		bannerSubText: 'Table of Contents',
	},
}
