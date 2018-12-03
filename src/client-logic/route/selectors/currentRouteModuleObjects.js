import { __, compose, map, prop } from 'ramda'

import routeDescriptions from 'sls-aws/src/descriptions/routes'
import moduleDescriptions from 'sls-aws/src/descriptions/modules'
import currentRouteId from 'sls-aws/src/client-logic/route/selectors/currentRouteId'

import {
	routeDescriptionLenses,
} from 'sls-aws/src/client-logic/route/lenses'

const { pathOrModules } = routeDescriptionLenses

export const currentRouteModuleObjectsHof = (
	routeDescriptionObj, moduleDescriptionsObj,
) => compose(
	map(
		moduleKey => [
			moduleKey,
			prop(moduleKey, moduleDescriptionsObj),
		],
	),
	pathOrModules(__, [], routeDescriptionObj),
	currentRouteId,
)

export default currentRouteModuleObjectsHof(
	routeDescriptions, moduleDescriptions,
)
