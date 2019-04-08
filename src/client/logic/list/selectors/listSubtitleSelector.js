import moduleDescriptions from 'root/src/shared/descriptions/modules'
import { listModuleLenses } from 'root/src/client/logic/list/lenses'

const { viewListSubtitle } = listModuleLenses

export const moduleEndpointIdSelectorHof = moduleDescriptionsObj => (
	state, { moduleId },
) => (
	viewListSubtitle(moduleId, moduleDescriptionsObj)
)

export default moduleEndpointIdSelectorHof(moduleDescriptions)
