import { SET_MEDIA_BREAKPOINTS } from 'sls-aws/src/client/logic/app/actionIds'

import {
	appStoreLenses,
} from 'sls-aws/src/client/logic/app/lenses'

const { setMediaBreakpoints } = appStoreLenses

export default {
	[SET_MEDIA_BREAKPOINTS]: (state, { breakpoints }) => setMediaBreakpoints(
		breakpoints,
		state,
	),
}
