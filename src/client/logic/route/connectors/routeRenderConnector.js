import reduxConnector from 'root/src/shared/util/reduxConnector'

import noRoute from 'root/src/client/logic/route/selectors/noRoute'
import currentRouteModuleTypes from 'root/src/client/logic/route/selectors/currentRouteModuleTypes'

export default reduxConnector(
	[
		['noRoute', noRoute],
		['currentRouteModuleTypes', currentRouteModuleTypes],
	],
)
