import { __, compose, map, prop } from 'ramda'

import routeDescriptions from 'root/src/shared/descriptions/routes'
import moduleDescriptions from 'root/src/shared/descriptions/modules'
import currentRouteId from 'root/src/client/logic/route/selectors/currentRouteId'

import {
	routeDescriptionLenses,
} from 'root/src/client/logic/route/lenses'

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
