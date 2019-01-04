import reduxConnector from 'sls-aws/src/shared/util/reduxConnector'

import noRoute from 'sls-aws/src/client-logic/route/selectors/noRoute'
import currentRouteModuleTypes from 'sls-aws/src/client-logic/route/selectors/currentRouteModuleTypes'

export default reduxConnector(
	[
		['noRoute', noRoute],
		['currentRouteModuleTypes', currentRouteModuleTypes],
	]
)
