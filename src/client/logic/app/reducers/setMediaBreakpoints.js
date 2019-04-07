import { SET_MEDIA_BREAKPOINTS } from 'root/src/client/logic/app/actionIds'

import {
	appStoreLenses,
} from 'root/src/client/logic/app/lenses'

const { setMediaBreakpoints } = appStoreLenses

export default {
	[SET_MEDIA_BREAKPOINTS]: (state, { breakpoints }) => setMediaBreakpoints(
		breakpoints,
		state,
	),
}
