import reduxConnector from 'root/src/shared/util/reduxConnector'

import getListSelector from 'sls-aws/src/client/logic/api/selectors/getListSelector'
import listTypeSelector from 'sls-aws/src/client/logic/list/selectors/listTypeSelector'
import listTitleSelector from 'sls-aws/src/client/logic/list/selectors/listTitleSelector'
import listSubtitleSelector from 'sls-aws/src/client/logic/list/selectors/listSubtitleSelector'
import listControlsSelector from 'sls-aws/src/client/logic/list/selectors/listControlsSelector'


export default reduxConnector(
	[
		['list', getListSelector],
		['listType', listTypeSelector],
		['listTitle', listTitleSelector],
		['listSubtitle', listSubtitleSelector],
		['listControls', listControlsSelector],
	],
	// [
	// 	['addSubForm', addSubForm],
	// ],
)
