import { BANNER_FOOTER_DARE_REJECT_CONFIRMATION_MODULE_ID } from 'sls-aws/src/shared/descriptions/modules/moduleIds'

import dareRejectConfirmation from 'sls-aws/src/client/assets/Dare-reject-confirmation-page.jpg'

export default {
	[BANNER_FOOTER_DARE_REJECT_CONFIRMATION_MODULE_ID]: {
		moduleType: 'bannerFooter',
		bannerFooterImage: dareRejectConfirmation,
		isSuccessPage: true,
	},
}
