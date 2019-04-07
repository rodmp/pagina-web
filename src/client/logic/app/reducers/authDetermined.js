import { AUTH_DETERMINED } from 'root/src/client/logic/app/actionIds'

import {
	appStoreLenses,
} from 'root/src/client/logic/app/lenses'

const { setAuthenticated } = appStoreLenses

export default {
	[AUTH_DETERMINED]: (state, { authenticated }) => setAuthenticated(
		authenticated,
		state,
	),
}
