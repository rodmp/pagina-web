import { SET_HAS_MORE } from 'root/src/client/logic/list/actionIds'

export default hasMore => ({
	type: SET_HAS_MORE,
	payload: hasMore,
})
