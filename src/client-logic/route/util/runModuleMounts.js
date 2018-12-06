import { map, reduce, head, prop } from 'ramda'

import routeDescriptions from 'sls-aws/src/descriptions/routes'

import {
	currentRouteModuleObjectsHof,
} from 'sls-aws/src/client-logic/route/selectors/currentRouteModuleObjects'
import currentRouteObjSelector from 'sls-aws/src/client-logic/route/selectors/currentRouteObj'

import {
	moduleDescriptionLenses, routeDescriptionLenses,
} from 'sls-aws/src/client-logic/route/lenses'

const { pathOrOnEnterActions, pathOrOnExitActions } = moduleDescriptionLenses

const { viewModules } = routeDescriptionLenses

export const circularGetModuleDescriptionObject = async () => {
	// lazy load cause of a circular dependency, ex:
	// src/client-logic/cognito/thunks/login.js ->
	// src/client-logic/route/thunks/pushRoute.js ->
	// src/client-logic/route/util/runModuleMounts.js ->
	// src/client-logic/route/selectors/currentRouteModuleObjects.js ->
	// src/descriptions/modules/index.js ->
	// src/descriptions/modules/loginForm.js ->
	// src/client-logic/cognito/thunks/login.js

	const moduleDescriptions = await import('../../../descriptions/modules')
	return prop('default', moduleDescriptions)
}

export const runModuleMountsHof = (
	routeDescriptionObject, circularGetModuleDescriptionObjectFn,
) => async (nextRouteObj, state) => {
	const { routeId } = nextRouteObj
	const currentRouteObj = currentRouteObjSelector(state)
	const enterModuleIds = viewModules(routeId, routeDescriptionObject)
	const moduleDescriptionObject = await circularGetModuleDescriptionObjectFn()
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
	routeDescriptions, circularGetModuleDescriptionObject,
)
