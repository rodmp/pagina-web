import { map, addIndex } from 'ramda'

import routeDescriptions from 'root/src/shared/descriptions/routes'
import moduleDescriptions from 'root/src/shared/descriptions/modules'
import {
	currentRouteModuleObjectsHof,
} from 'root/src/client/logic/route/selectors/currentRouteModuleObjects'

import {
	moduleDescriptionLenses,
} from 'root/src/client/logic/route/lenses'

const { viewModuleType } = moduleDescriptionLenses

export const currentRouteModuleTypesHof = (
	routeDescriptionObj, moduleDescriptionObj,
) => state => addIndex(map)(
	([moduleId], index) => [
		moduleId, viewModuleType(moduleId, moduleDescriptionObj), index,
	],
	currentRouteModuleObjectsHof(
		routeDescriptionObj, moduleDescriptionObj,
	)(state),
)

export default currentRouteModuleTypesHof(
	routeDescriptions, moduleDescriptions,
)
