import { map, addIndex } from 'ramda'

import routeDescriptions from 'sls-aws/src/shared/descriptions/routes'
import moduleDescriptions from 'sls-aws/src/shared/descriptions/modules'
import {
	currentRouteModuleObjectsHof,
} from 'sls-aws/src/client/logic/route/selectors/currentRouteModuleObjects'

import {
	moduleDescriptionLenses,
} from 'sls-aws/src/client/logic/route/lenses'

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
