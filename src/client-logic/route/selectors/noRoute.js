import { pathSatisfies, isNil, isEmpty, or } from 'ramda'

import { routeHistoryPath } from 'sls-aws/src/client-logic/route/lenses'

export default pathSatisfies(or(isNil, isEmpty), routeHistoryPath)
