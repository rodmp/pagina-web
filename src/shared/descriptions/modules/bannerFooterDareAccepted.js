import { BANNER_FOOTER_DARE_ACCEPTED_MODULE_ID } from 'sls-aws/src/shared/descriptions/modules/moduleIds'

import dareAccepted from 'sls-aws/src/client/assets/Dare-accepted.jpg'

export default {
	[BANNER_FOOTER_DARE_ACCEPTED_MODULE_ID]: {
		moduleType: 'bannerFooter',
		bannerFooterImage: dareAccepted,
		isSuccessPage: true,
	},
}
