import { SET_FIRST_PAGE } from 'root/src/client/logic/list/actionIds'

import { listStoreLenses } from 'root/src/client/logic/list/lenses'

const { setCurrentPage } = listStoreLenses

const setCurrentPageFunc = state => setCurrentPage(1, state)

export default {
	[SET_FIRST_PAGE]: setCurrentPageFunc,
}
