import reduxConnector from 'sls-aws/src/shared/util/reduxConnector'

import bannerImageSelector from 'sls-aws/src/client/logic/header/selectors/bannerImageSelector'
import bannerImageTextSelector from 'sls-aws/src/client/logic/header/selectors/bannerImageTextSelector'
import bannerSubTextSelector from 'sls-aws/src/client/logic/header/selectors/bannerSubTextSelector'
import textWithBg from 'sls-aws/src/client/logic/header/selectors/textWithBg'
import createNewDareActive from 'sls-aws/src/client/logic/header/selectors/createNewDareActive'
import linkLabelSelector from 'sls-aws/src/client/logic/header/selectors/linkLabelSelector'
import linkRouteIdSelector from 'sls-aws/src/client/logic/header/selectors/linkRouteIdSelector'

import pushRoute from 'sls-aws/src/client/logic/route/thunks/pushRoute'
import bannerImageSubTextSelector from '../selectors/bannerImageSubTextSelector'

export default reduxConnector(
	[
		['bannerImage', bannerImageSelector],
		['bannerImageText', bannerImageTextSelector],
		['bannerImageSubText', bannerImageSubTextSelector],
		['bannerSubText', bannerSubTextSelector],
		['textWithBg', textWithBg],
		['createNewDareActive', createNewDareActive],
		['linkLabel', linkLabelSelector],
		['linkRouteId', linkRouteIdSelector],
	],
	[
		['pushRoute', pushRoute],
	],
)
