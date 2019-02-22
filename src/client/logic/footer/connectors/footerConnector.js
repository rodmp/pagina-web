import reduxConnector from 'sls-aws/src/shared/util/reduxConnector'

import bannerFooterImageSelector from 'sls-aws/src/client/logic/footer/selectors/bannerFooterImageSelector'
import isSuccessPageSelector from 'sls-aws/src/client/logic/footer/selectors/isSuccessPageSelector'

export default reduxConnector(
	[
		['bannerFooterImage', bannerFooterImageSelector],
		['isSuccessPage', isSuccessPageSelector],
	],
)
