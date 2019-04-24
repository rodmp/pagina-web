import reduxConnector from 'root/src/shared/util/reduxConnector'

import navigationLinks from 'root/src/client/logic/app/selectors/navigationLinks'
import pushRoute from 'root/src/client/logic/route/thunks/pushRoute'

export default reduxConnector(
	[
		['navigationLinks', navigationLinks],
	],
	[
		['pushRoute', pushRoute],
	],
)
