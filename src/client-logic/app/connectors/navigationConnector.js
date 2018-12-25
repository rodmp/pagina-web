import reduxConnector from 'sls-aws/src/util/reduxConnector'

import showMobileNavSelector from 'sls-aws/src/client-logic/app/selectors/showMobileNavSelector'

import pushRoute from 'sls-aws/src/client-logic/route/thunks/pushRoute'

export default reduxConnector(
	[
		['showMobileNav', showMobileNavSelector],
	],
	[
		['pushRoute', pushRoute],
	],
)
