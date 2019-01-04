import reduxConnector from 'sls-aws/src/shared/util/reduxConnector'

import getListSelector from 'sls-aws/src/client-logic/api/selectors/getListSelector'

export default reduxConnector(
	[
		['list', getListSelector],
	],
	// [
	// 	['addSubForm', addSubForm],
	// ],
)
