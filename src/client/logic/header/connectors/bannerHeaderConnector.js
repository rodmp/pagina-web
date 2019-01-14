import reduxConnector from 'sls-aws/src/shared/util/reduxConnector'

import bannerImageSelector from 'sls-aws/src/client/logic/header/selectors/bannerImageSelector'
import bannerImageTextSelector from 'sls-aws/src/client/logic/header/selectors/bannerImageTextSelector'
import bannerSubTextSelector from 'sls-aws/src/client/logic/header/selectors/bannerSubTextSelector'
import linkLabelSelector from 'sls-aws/src/client/logic/header/selectors/linkLabelSelector'
import linkRouteIdSelector from 'sls-aws/src/client/logic/header/selectors/linkRouteIdSelector'

import pushRoute from 'sls-aws/src/client/logic/route/thunks/pushRoute'

export default reduxConnector(
	[
		['bannerImage', bannerImageSelector],
		['bannerImageText', bannerImageTextSelector],
		['bannerSubText', bannerSubTextSelector],
		['linkLabel', linkLabelSelector],
		['linkRouteId', linkRouteIdSelector],
	],
	[
		['pushRoute', pushRoute],
	],
)
