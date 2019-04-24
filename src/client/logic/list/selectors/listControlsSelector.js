import moduleDescriptions from 'root/src/shared/descriptions/modules'
import { listModuleLenses } from 'root/src/client/logic/list/lenses'

const { viewListControls } = listModuleLenses

export const moduleEndpointIdSelectorHof = moduleDescriptionsObj => (
	state, { moduleId },
) => (
		viewListControls(moduleId, moduleDescriptionsObj)
	)

export default moduleEndpointIdSelectorHof(moduleDescriptions)
