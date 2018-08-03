import { view, compose, head } from 'ramda'

import { routeHistoryLens } from 'sls-aws/src/client-logic/route/lenses'

export default compose(head, view(routeHistoryLens))
