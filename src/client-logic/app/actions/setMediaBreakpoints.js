import { SET_MEDIA_BREAKPOINTS } from 'sls-aws/src/client-logic/app/actionIds'

export default breakpoints => ({
	type: SET_MEDIA_BREAKPOINTS,
	payload: { breakpoints },
})
