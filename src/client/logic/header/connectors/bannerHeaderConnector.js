import reduxConnector from 'root/src/shared/util/reduxConnector'

import bannerImageSelector from 'root/src/client/logic/header/selectors/bannerImageSelector'
import bannerImageTextSelector from 'root/src/client/logic/header/selectors/bannerImageTextSelector'
import bannerSubTextSelector from 'root/src/client/logic/header/selectors/bannerSubTextSelector'
import textWithBg from 'root/src/client/logic/header/selectors/textWithBg'
import createNewDareActive from 'root/src/client/logic/header/selectors/createNewDareActive'
import linkLabelSelector from 'root/src/client/logic/header/selectors/linkLabelSelector'
import linkRouteIdSelector from 'root/src/client/logic/header/selectors/linkRouteIdSelector'
import pushRoute from 'root/src/client/logic/route/thunks/pushRoute'
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
