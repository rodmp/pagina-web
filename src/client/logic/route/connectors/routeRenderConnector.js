import reduxConnector from 'root/src/shared/util/reduxConnector'

import noRoute from 'root/src/client/logic/route/selectors/noRoute'
import currentRouteModuleTypes from 'root/src/client/logic/route/selectors/currentRouteModuleTypes'
import currentRouteId from 'root/src/client/logic/route/selectors/currentRouteId'

export default reduxConnector(
	[
		['currentRouteId', currentRouteId],
		['noRoute', noRoute],
		['currentRouteModuleTypes', currentRouteModuleTypes],
	],
)
