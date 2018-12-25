import reduxConnector from 'sls-aws/src/util/reduxConnector'

import currentYearSelector from 'sls-aws/src/client-logic/app/selectors/currentYearSelector'

import pushRoute from 'sls-aws/src/client-logic/route/thunks/pushRoute'

export default reduxConnector(
	[
		['currentYear', currentYearSelector],
	],
	[
		['pushRoute', pushRoute],
	],
)
