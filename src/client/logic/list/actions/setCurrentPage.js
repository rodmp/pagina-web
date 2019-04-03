import { SET_CURRENT_PAGE } from 'root/src/client/logic/list/actionIds'


export default currentPage => ({
	type: SET_CURRENT_PAGE,
	payload: currentPage,
})
