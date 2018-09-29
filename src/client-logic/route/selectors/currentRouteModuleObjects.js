import { __, compose, map, toPairs, prop } from 'ramda'

import routeDescriptions from 'sls-aws/src/descriptions/routes'
import moduleDescriptions from 'sls-aws/src/descriptions/modules'
import currentRouteId from 'sls-aws/src/client-logic/route/selectors/currentRouteId'

import {
	routeDescriptionLenses, moduleDescriptionLenses,
} from 'sls-aws/src/client-logic/route/lenses'

const { pathOrModules } = routeDescriptionLenses
const { viewModuleType } = moduleDescriptionLenses

export const currentRouteModuleObjectsHof = (
	routeDescriptionObj, moduleDescriptionsObj
) => compose(
	map(
		moduleKey => [
			moduleKey,
			prop(moduleKey, moduleDescriptionsObj)
		]
	),
	pathOrModules(__, [], routeDescriptionObj),
	currentRouteId
)

export default currentRouteModuleObjectsHof(
	routeDescriptions, moduleDescriptions
)
