import { map, reduce, pathOr } from 'ramda'

import routeDescriptions from 'root/src/shared/descriptions/routes'
import moduleDescriptions from 'root/src/shared/descriptions/modules'

import currentRouteObjSelector from 'root/src/client/logic/route/selectors/currentRouteObj'

import {
	routeDescriptionLenses, moduleDescriptionLenses,
} from 'root/src/client/logic/route/lenses'

import listModuleOnEnter from 'root/src/client/logic/api/thunks/listModuleOnEnter'
import recordModuleOnEnter from 'root/src/client/logic/api/thunks/recordModuleOnEnter'
import externalModuleOnEnter from 'root/src/client/logic/api/thunks/externalModuleOnEnter'
import formModuleOnEnter from 'root/src/client/logic/api/thunks/formModuleOnEnter'

const { viewModules } = routeDescriptionLenses
const { viewModuleType } = moduleDescriptionLenses

// eslint-disable-next-line consistent-return
const moduleTypeAction = (moduleType) => {
	switch (moduleType) {
		case 'list':
			return listModuleOnEnter
		case 'record':
			return recordModuleOnEnter
		case 'external':
			return externalModuleOnEnter
		case 'form':
			return formModuleOnEnter
		default:
	}
}


export const runModuleMountsHof = (
	routeDescriptionsObj, moduleDescriptionsObj, moduleTypeActionFn,
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
					const action = moduleTypeActionFn(moduleType)
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
	routeDescriptions, moduleDescriptions, moduleTypeAction,
)
