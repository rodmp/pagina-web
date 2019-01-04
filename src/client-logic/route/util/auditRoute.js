import { equals } from 'ramda'

import routeDescriptions from 'sls-aws/src/shared/descriptions/routes'
import isAuthenticated from 'sls-aws/src/client-logic/auth/selectors/isAuthenticated'
import {
	authValue, unAuthValue, routeDescriptionLenses,
} from 'sls-aws/src/client-logic/route/lenses'

const { viewAuthentication } = routeDescriptionLenses
export const auditRouteHof = (
	authenticatedFn, routeDescriptionObj,
) => ({ routeId }, state) => {
	const routeAuth = viewAuthentication(routeId, routeDescriptionObj)
	const authenticatedState = authenticatedFn(state) ? authValue : unAuthValue
	return !routeAuth ? true : equals(routeAuth, authenticatedState)
}

export default auditRouteHof(isAuthenticated, routeDescriptions)
