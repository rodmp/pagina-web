import moduleDescriptions from 'root/src/shared/descriptions/modules'
import { listModuleLenses } from 'root/src/client/logic/list/lenses'

const { viewListSubmits } = listModuleLenses

export const moduleEndpointIdSelectorHof = moduleDescriptionsObj => (
	state, { moduleId },
) => (
		viewListSubmits(moduleId, moduleDescriptionsObj)
	)

export default moduleEndpointIdSelectorHof(moduleDescriptions)
