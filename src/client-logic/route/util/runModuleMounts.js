import { map, reduce, pathOr } from 'ramda'

import routeDescriptions from 'sls-aws/src/descriptions/routes'
import moduleDescriptions from 'sls-aws/src/descriptions/modules'

import currentRouteObjSelector from 'sls-aws/src/client-logic/route/selectors/currentRouteObj'

import {
	routeDescriptionLenses, moduleDescriptionLenses,
} from 'sls-aws/src/client-logic/route/lenses'

import listModuleOnEnter from 'sls-aws/src/client-logic/api/thunks/listModuleOnEnter'
import recordModuleOnEnter from 'sls-aws/src/client-logic/api/thunks/recordModuleOnEnter'

const { viewModules } = routeDescriptionLenses
const { viewModuleType } = moduleDescriptionLenses

// eslint-disable-next-line consistent-return
const moduleTypeAction = (moduleType) => {
	switch (moduleType) {
		case 'list':
			return listModuleOnEnter
		case 'record':
			return recordModuleOnEnter
		default:
	}
}


export const runModuleMountsHof = (
	routeDescriptionsObj, moduleDescriptionsObj,
) => (
	(nextRouteObj, state) => async (dispatch) => {
		const { routeId } = nextRouteObj
		const currentRouteObj = currentRouteObjSelector(state)
		const enterModuleIds = viewModules(routeId, routeDescriptionsObj)
		return Promise.all(
			reduce(
				(result, moduleId) => {
					const moduleType = viewModuleType(
						moduleId, moduleDescriptionsObj,
					)
					const action = moduleTypeAction(moduleType)
					if (action) {
						const args = { currentRouteObj, nextRouteObj, moduleId }
						return [
							dispatch(action(args)),
							result,
						]
					}
					return result
				},
				[],
				enterModuleIds,
			),
		)
	}
)

export default runModuleMountsHof(
	routeDescriptions, moduleDescriptions,
)
