import moduleDescriptions from 'sls-aws/src/descriptions/modules'
import { listModuleLenses } from 'sls-aws/src/client-logic/list/lenses'

const { viewListType } = listModuleLenses

export const moduleEndpointIdSelectorHof = moduleDescriptionsObj => (
	state, { moduleId },
) => (
	viewListType(moduleId, moduleDescriptionsObj)
)

export default moduleEndpointIdSelectorHof(moduleDescriptions)
