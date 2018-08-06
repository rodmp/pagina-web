import reduxConnector from 'sls-aws/src/util/reduxConnector'

import currentRouteModuleTypes from 'sls-aws/src/client-logic/route/selectors/currentRouteModuleTypes'

export default reduxConnector(
	[['currentRouteModuleTypes', currentRouteModuleTypes]]
)
