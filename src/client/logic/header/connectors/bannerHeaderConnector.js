import reduxConnector from 'sls-aws/src/shared/util/reduxConnector'

import bannerImageSelector from 'sls-aws/src/client/logic/header/selectors/bannerImageSelector'
import bannerImageTextSelector from 'sls-aws/src/client/logic/header/selectors/bannerImageTextSelector'
import bannerSubTextSelector from 'sls-aws/src/client/logic/header/selectors/bannerSubTextSelector'
import bannerImageSubTextSelector from '../selectors/bannerImageSubTextSelector'
import textWithBg from 'sls-aws/src/client/logic/header/selectors/textWithBg'
import linkLabelSelector from 'sls-aws/src/client/logic/header/selectors/linkLabelSelector'
import linkRouteIdSelector from 'sls-aws/src/client/logic/header/selectors/linkRouteIdSelector'

import pushRoute from 'sls-aws/src/client/logic/route/thunks/pushRoute'

export default reduxConnector(
	[
		['bannerImage', bannerImageSelector],
		['bannerImageText', bannerImageTextSelector],
		['bannerImageSubText', bannerImageSubTextSelector],
		['bannerSubText', bannerSubTextSelector],
		['textWithBg', textWithBg],
		['linkLabel', linkLabelSelector],
		['linkRouteId', linkRouteIdSelector],
	],
	[
		['pushRoute', pushRoute],
	],
)
