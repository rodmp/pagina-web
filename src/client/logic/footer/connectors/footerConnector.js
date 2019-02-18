import reduxConnector from 'sls-aws/src/shared/util/reduxConnector'

import bannerFooterImageSelector from 'sls-aws/src/client/logic/footer/selectors/bannerFooterImageSelector'

export default reduxConnector(
	[
		['bannerFooterImage', bannerFooterImageSelector],
	],
)
