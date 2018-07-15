import { path, equals } from 'ramda'

import routes from 'sls-aws/src/client-logic/route/constants/routes/auth'
import isAuthenticated from 'sls-aws/src/client-logic/auth/selectors/isAuthenticated'
import {
	authKey, authValue, unAuthValue,
} from 'sls-aws/src/client-logic/route/lenses'

export const auditRouteHof = (authenticatedFn, routes) => (
	{ routeId }
) => {
	const routeAuth = path([routeId, authKey], routes)
	const authenticatedState = authenticatedFn() ? authValue : unAuthValue
	return !routeAuth ? true : equals(routeAuth, authenticatedState)
}

export default auditRouteHof(isAuthenticated, routes)
