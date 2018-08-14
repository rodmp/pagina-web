import { isNil, isEmpty, or } from 'ramda'

import { routeStoreLenses } from 'sls-aws/src/client-logic/route/lenses'

const { pathSatisfiesHistory } = routeStoreLenses

export default pathSatisfiesHistory(or(isNil, isEmpty))
