import { SET_HAS_MORE } from 'root/src/client/logic/list/actionIds'

import { listStoreLenses } from 'root/src/client/logic/list/lenses'

const { setHasMore } = listStoreLenses

export const setHasMoreFunc = (state, payload) => setHasMore(payload, state)

export default {
	[SET_HAS_MORE]: setHasMoreFunc,
}
