import { prepend } from 'ramda'

import { CHANGE_ROUTE } from 'root/src/client/logic/route/actionIds'
import { routeStoreLenses } from 'root/src/client/logic/route/lenses'

const { overHistory } = routeStoreLenses

export default {
	[CHANGE_ROUTE]: (state, action) => overHistory(
		prepend(action),
		state,
	),
}
