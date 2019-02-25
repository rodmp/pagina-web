import reduxConnector from 'root/src/shared/util/reduxConnector'

import getListSelector from 'root/src/client/logic/api/selectors/getListSelector'
import listTypeSelector from 'root/src/client/logic/list/selectors/listTypeSelector'

export default reduxConnector(
	[
		['list', getListSelector],
		['listType', listTypeSelector],
	],
	// [
	// 	['addSubForm', addSubForm],
	// ],
)
