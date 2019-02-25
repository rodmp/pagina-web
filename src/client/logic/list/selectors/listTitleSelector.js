import moduleDescriptions from 'root/src/shared/descriptions/modules'
import { listModuleLenses } from 'root/src/client/logic/list/lenses'

const { viewListTitle } = listModuleLenses

export const moduleEndpointIdSelectorHof = moduleDescriptionsObj => (
	state, { moduleId },
) => (
	viewListTitle(moduleId, moduleDescriptionsObj)
)

export default moduleEndpointIdSelectorHof(moduleDescriptions)
