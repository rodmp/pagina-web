import { RULES_OF_USE_BANNER_HEADER_MODULE_ID } from 'sls-aws/src/shared/descriptions/modules/moduleIds'

import accountSettings from 'sls-aws/src/client/assets/accountSettings.png'

export default {
	[RULES_OF_USE_BANNER_HEADER_MODULE_ID]: {
		moduleType: 'bannerHeader',
		bannerImage: accountSettings,
		bannerImageText: 'Rules of Use',
		bannerSubText: '',
	},
}
