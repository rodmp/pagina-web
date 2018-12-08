import { map, reduce, head, prop } from 'ramda'

import routeDescriptions from 'sls-aws/src/descriptions/routes'

import {
	currentRouteModuleObjectsHof,
} from 'sls-aws/src/client-logic/route/selectors/currentRouteModuleObjects'
import currentRouteObjSelector from 'sls-aws/src/client-logic/route/selectors/currentRouteObj'

import { routeDescriptionLenses } from 'sls-aws/src/client-logic/route/lenses'

import {
	pathOrOnEnterActions, pathOrOnExitActions,
} from 'sls-aws/src/descriptions/moduleMountActions'

const { viewModules } = routeDescriptionLenses

export const runModuleMountsHof = routeDescriptionObject => (
	(nextRouteObj, state) => async (dispatch) => {
		const { routeId } = nextRouteObj
		const currentRouteObj = currentRouteObjSelector(state)
		const enterModuleIds = viewModules(routeId, routeDescriptionObject)
		const exitModuleIds = []
		const allActions = [
			...reduce((results, moduleId) => [
				...pathOrOnExitActions(moduleId),
				...results,
			], [], exitModuleIds),
			...reduce((results, moduleId) => [
				...pathOrOnEnterActions(moduleId),
				...results,
			], [], enterModuleIds),
		]
		return Promise.all(
			map(
				action => dispatch(action({
					currentRouteObj,
					nextRouteObj,
				})),
				allActions,
			),
		)
	}
)

export default runModuleMountsHof(
	routeDescriptions,
)
