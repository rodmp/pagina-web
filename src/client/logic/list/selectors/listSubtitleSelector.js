import moduleDescriptions from 'sls-aws/src/shared/descriptions/modules'
import { listModuleLenses } from 'sls-aws/src/client/logic/list/lenses'

const { viewListSubtitle } = listModuleLenses

export const moduleEndpointIdSelectorHof = moduleDescriptionsObj => (
	state, { moduleId },
) => (
	viewListSubtitle(moduleId, moduleDescriptionsObj)
)

export default moduleEndpointIdSelectorHof(moduleDescriptions)
