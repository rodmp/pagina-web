import reduxConnector from 'root/src/shared/util/reduxConnector'

import linkTargetSelector from 'root/src/client/logic/app/selectors/linkTargetSelector'
import linkHrefSelector from 'root/src/client/logic/app/selectors/linkHrefSelector'

import pushRoute from 'root/src/client/logic/route/thunks/pushRoute'

export default reduxConnector(
	[
		['linkHref', linkHrefSelector],
		['linkTarget', linkTargetSelector],
	],
	[
		['pushRoute', pushRoute],
	],
)
