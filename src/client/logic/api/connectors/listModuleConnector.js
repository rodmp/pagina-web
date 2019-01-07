import reduxConnector from 'sls-aws/src/shared/util/reduxConnector'

import getListSelector from 'sls-aws/src/client/logic/api/selectors/getListSelector'
import listTypeSelector from 'sls-aws/src/client/logic/list/selectors/listTypeSelector'

export default reduxConnector(
	[
		['list', getListSelector],
		['listType', listTypeSelector],
	],
	// [
	// 	['addSubForm', addSubForm],
	// ],
)
