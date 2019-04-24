import { compose } from 'ramda'

import { API_FETCH_USER_DATA_SUCCESS } from 'root/src/client/logic/api/actionIds'
import { apiStoreLenses } from 'root/src/client/logic/api/lenses'

const { setUserDataChild } = apiStoreLenses

export const apiFetchUserDataSuccess = (
	state,
	{ recordStoreKey, body },
) => compose(
	setUserDataChild(recordStoreKey, body),
)(state)

export default {
	[API_FETCH_USER_DATA_SUCCESS]: apiFetchUserDataSuccess,
}
