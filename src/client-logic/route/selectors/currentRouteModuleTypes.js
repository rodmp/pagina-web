import { __, compose, map, addIndex, or } from 'ramda'

import routeDescriptions from 'sls-aws/src/descriptions/routes'
import moduleDescriptions from 'sls-aws/src/descriptions/modules'
import currentRouteId from 'sls-aws/src/client-logic/route/selectors/currentRouteId'

import {
	routeDescriptionLenses, moduleDescriptionLenses,
} from 'sls-aws/src/client-logic/route/lenses'

const { pathOrModules } = routeDescriptionLenses
const { viewModuleType } = moduleDescriptionLenses

export const currentRouteModuleTypesHof = (
	routeDescriptionObj, moduleObj
) => compose(
	addIndex(map)((moduleId, index) => [
		moduleId, viewModuleType(moduleId, moduleObj), index
	]),
	pathOrModules(__, [], routeDescriptionObj),
	currentRouteId
)

export default currentRouteModuleTypesHof(
	routeDescriptions, moduleDescriptions
)
