import moduleDescriptions from 'root/src/shared/descriptions/modules'
import { listModuleLenses } from 'root/src/client/logic/list/lenses'

const { viewListType } = listModuleLenses

export const moduleEndpointIdSelectorHof = moduleDescriptionsObj => (
	state, { moduleId },
) => (
	viewListType(moduleId, moduleDescriptionsObj)
)

export default moduleEndpointIdSelectorHof(moduleDescriptions)
