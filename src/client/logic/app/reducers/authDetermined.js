import { AUTH_DETERMINED } from 'sls-aws/src/client/logic/app/actionIds'

import {
	appStoreLenses,
} from 'sls-aws/src/client/logic/app/lenses'

const { setAuthenticated } = appStoreLenses

export default {
	[AUTH_DETERMINED]: (state, { authenticated }) => setAuthenticated(
		authenticated,
		state,
	),
}
