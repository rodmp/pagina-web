import reduxConnector from 'root/src/shared/util/reduxConnector'

import currentYearSelector from 'root/src/client/logic/app/selectors/currentYearSelector'

import pushRoute from 'root/src/client/logic/route/thunks/pushRoute'

export default reduxConnector(
	[
		['currentYear', currentYearSelector],
	],
	[
		['pushRoute', pushRoute],
	],
)
