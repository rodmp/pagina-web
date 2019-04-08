import reduxConnector from 'root/src/shared/util/reduxConnector'

import getListSelector from 'root/src/client/logic/api/selectors/getListSelector'
import listTypeSelector from 'root/src/client/logic/list/selectors/listTypeSelector'
import listTitleSelector from 'root/src/client/logic/list/selectors/listTitleSelector'
import listSubtitleSelector from 'root/src/client/logic/list/selectors/listSubtitleSelector'
import listControlsSelector from 'root/src/client/logic/list/selectors/listControlsSelector'

import deletePaymentMethod from 'root/src/client/logic/list/thunks/deletePaymentMethod'
import setDefaultPaymentMethod from 'root/src/client/logic/list/thunks/setDefaultPaymentMethod'
import addPaymentOnSuccess from 'root/src/client/logic/list/thunks/addPaymentOnSuccess'


export default reduxConnector(
	[
		['list', getListSelector],
		['listType', listTypeSelector],
		['listTitle', listTitleSelector],
		['listSubtitle', listSubtitleSelector],
		['listControls', listControlsSelector],
	],
	[
		['deletePaymentMethod', deletePaymentMethod],
		['setDefaultPaymentMethod', setDefaultPaymentMethod],
		['addPaymentOnSuccess', addPaymentOnSuccess],
	],
)
