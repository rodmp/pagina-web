import { AUTH_DETERMINED } from 'sls-aws/src/client-logic/app/actionIds'

export default authenticated => ({
	type: AUTH_DETERMINED,
	payload: { authenticated },
})
