import { over, prepend } from 'ramda'

import { payloadProp } from 'sls-aws/src/util/commonLenses'
import { CHANGE_ROUTE } from 'sls-aws/src/client-logic/route/actionIds'
import { routeHistoryLens } from 'sls-aws/src/client-logic/route/lenses'

export default {
	[CHANGE_ROUTE]: (state, action) => over(
		routeHistoryLens,
		prepend(payloadProp(action)),
		state,
	)
}
