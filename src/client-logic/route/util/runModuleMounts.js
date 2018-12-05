import { map, reduce, head } from 'ramda'

import routeDescriptions from 'sls-aws/src/descriptions/routes'
import moduleDescriptions from 'sls-aws/src/descriptions/modules'

import {
	currentRouteModuleObjectsHof,
} from 'sls-aws/src/client-logic/route/selectors/currentRouteModuleObjects'
import currentRouteObjSelector from 'sls-aws/src/client-logic/route/selectors/currentRouteObj'

import {
	moduleDescriptionLenses, routeDescriptionLenses,
} from 'sls-aws/src/client-logic/route/lenses'

const { pathOrOnEnterActions, pathOrOnExitActions } = moduleDescriptionLenses

const { viewModules } = routeDescriptionLenses

export const runModuleMountsHof = (
	routeDescriptionObject, moduleDescriptionObject,
) => (nextRouteObj, state) => {
	const { routeId } = nextRouteObj
	const currentRouteObj = currentRouteObjSelector(state)
	const enterModuleIds = viewModules(routeId, routeDescriptionObject)
	const exitModuleIds = map(
		head,
		currentRouteModuleObjectsHof(
			routeDescriptionObject, moduleDescriptionObject,
		)(state),
	)
	const allActions = [
		...reduce((results, moduleId) => [
			...pathOrOnExitActions(moduleId, [], moduleDescriptionObject),
			...results,
		], [], exitModuleIds),
		...reduce((results, moduleId) => [
			...pathOrOnEnterActions(moduleId, [], moduleDescriptionObject),
			...results,
		], [], enterModuleIds),
	]
	return Promise.all(
		map(
			action => action({
				currentRouteObj,
				nextRouteObj,
			}),
			allActions,
		),
	)
}

export default runModuleMountsHof(
	routeDescriptions, moduleDescriptions,
)
