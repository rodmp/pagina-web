import reduxConnector from 'root/src/shared/util/reduxConnector'

import getListSelector from 'root/src/client/logic/api/selectors/getListSelector'
import listTypeSelector from 'root/src/client/logic/list/selectors/listTypeSelector'
import listTitleSelector from 'root/src/client/logic/list/selectors/listTitleSelector'
import listSubtitleSelector from 'root/src/client/logic/list/selectors/listSubtitleSelector'
import listControlsSelector from 'root/src/client/logic/list/selectors/listControlsSelector'


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
