import { SET_CURRENT_PAGE } from 'root/src/client/logic/list/actionIds'

import { listStoreLenses } from 'root/src/client/logic/list/lenses'

const { setCurrentPage } = listStoreLenses

const setCurrentPageFunc = (state, payload) => setCurrentPage(payload, state)

export default {
	[SET_CURRENT_PAGE]: setCurrentPageFunc,
}
