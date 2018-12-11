import { map, reduce, pathOr } from 'ramda'

import routeDescriptions from 'sls-aws/src/descriptions/routes'

import currentRouteObjSelector from 'sls-aws/src/client-logic/route/selectors/currentRouteObj'

import { routeDescriptionLenses } from 'sls-aws/src/client-logic/route/lenses'

import moduleMountActions from 'sls-aws/src/descriptions/moduleMountActions'

const { viewModules } = routeDescriptionLenses

export const runModuleMountsHof = (
	routeDescriptionObject, moduleMountActionsObj,
) => (
	(nextRouteObj, state) => async (dispatch) => {
		const { routeId } = nextRouteObj
		const currentRouteObj = currentRouteObjSelector(state)
		const enterModuleIds = viewModules(routeId, routeDescriptionObject)
		const exitModuleIds = viewModules(
			currentRouteObj.routeId, routeDescriptionObject,
		) || []
		const allActions = [
			...reduce((results, moduleId) => [
				...pathOr(
					[], [moduleId, 'onEnterActions'], moduleMountActionsObj,
				),
				...results,
			], [], enterModuleIds),
			...reduce((results, moduleId) => [
				...pathOr(
					[], [moduleId, 'onExitActions'], moduleMountActionsObj,
				),
				...results,
			], [], exitModuleIds),
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
	routeDescriptions, moduleMountActions,
)
