import { AUTH_DETERMINED } from 'root/src/client/logic/app/actionIds'

export default authenticated => ({
	type: AUTH_DETERMINED,
	payload: { authenticated },
})
