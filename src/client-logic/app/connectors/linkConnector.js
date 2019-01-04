import reduxConnector from 'sls-aws/src/shared/util/reduxConnector'

import linkTargetSelector from 'sls-aws/src/client-logic/app/selectors/linkTargetSelector'
import linkHrefSelector from 'sls-aws/src/client-logic/app/selectors/linkHrefSelector'

import pushRoute from 'sls-aws/src/client-logic/route/thunks/pushRoute'

export default reduxConnector(
	[
		['linkHref', linkHrefSelector],
		['linkTarget', linkTargetSelector],
	],
	[
		['pushRoute', pushRoute],
	],
)
