import reduxConnector from 'sls-aws/src/util/reduxConnector'

import navigationLinks from 'sls-aws/src/client-logic/app/selectors/navigationLinks'
import pushRoute from 'sls-aws/src/client-logic/route/thunks/pushRoute'

export default reduxConnector(
	[
		['navigationLinks', navigationLinks],
	],
	[
		['pushRoute', pushRoute],
	],
)
