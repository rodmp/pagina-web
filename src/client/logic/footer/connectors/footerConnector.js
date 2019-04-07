import reduxConnector from 'root/src/shared/util/reduxConnector'

import bannerFooterImageSelector from 'root/src/client/logic/footer/selectors/bannerFooterImageSelector'
import isSuccessPageSelector from 'root/src/client/logic/footer/selectors/isSuccessPageSelector'

export default reduxConnector(
	[
		['bannerFooterImage', bannerFooterImageSelector],
		['isSuccessPage', isSuccessPageSelector],
	],
)
