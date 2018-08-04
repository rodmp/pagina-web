import { __, compose, map } from 'ramda'

import routeDescriptions from 'sls-aws/src/descriptions/routes'
import moduleDescriptions from 'sls-aws/src/descriptions/modules'
import currentRouteId from 'sls-aws/src/client-logic/route/selectors/currentRouteId'

import {
	routeDescriptionLenses, moduleDescriptionLenses,
} from 'sls-aws/src/client-logic/route/lenses'

const { viewModules } = routeDescriptionLenses
const { viewModuleType } = moduleDescriptionLenses

export const currentRouteModuleTypesHof = (
	routeDescriptionObj, moduleObj
) => compose(
	map(moduleId => [moduleId, viewModuleType(moduleId, moduleObj)]),
	viewModules(__, routeDescriptionObj),
	currentRouteId
)

export default currentRouteModuleTypesHof(
	routeDescriptions, moduleDescriptions
)