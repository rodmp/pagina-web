import reduxConnector from 'sls-aws/src/util/reduxConnector'

import recordClickActionLoadingSelector from 'sls-aws/src/client-logic/api/selectors/recordClickActionLoadingSelector'
import recordClickActionLabelSelector from 'sls-aws/src/client-logic/api/selectors/recordClickActionLabelSelector'

import recordClickAction from 'sls-aws/src/client-logic/api/thunks/recordClickAction'

export default reduxConnector(
	[
		['loading', recordClickActionLoadingSelector],
		['label', recordClickActionLabelSelector],
	],
	[
		['recordClickAction', recordClickAction],
	],
)
