import { SET_MEDIA_BREAKPOINTS } from 'root/src/client/logic/app/actionIds'

export default breakpoints => ({
	type: SET_MEDIA_BREAKPOINTS,
	payload: { breakpoints },
})
