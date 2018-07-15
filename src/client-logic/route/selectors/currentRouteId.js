import { compose, prop } from 'ramda'

import { routeIdKey } from 'sls-aws/src/client-logic/route/lenses'
import currentRoute from 'sls-aws/src/client-logic/route/selectors/currentRoute'

export default compose(prop(routeIdKey), currentRoute)
