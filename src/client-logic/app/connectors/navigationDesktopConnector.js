import reduxConnector from 'sls-aws/src/util/reduxConnector'

import desktopNavigation from 'sls-aws/src/client-logic/app/selectors/desktopNavigation'
import pushRoute from 'sls-aws/src/client-logic/route/thunks/pushRoute'

export default reduxConnector(
	[
		['desktopNavigation', desktopNavigation],
	],
	[
		['pushRoute', pushRoute],
	],
)
