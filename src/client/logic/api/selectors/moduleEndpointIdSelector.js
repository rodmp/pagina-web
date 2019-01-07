import moduleDescriptions from 'sls-aws/src/shared/descriptions/modules'
import {
	generalApiModuleDescriptionLenses,
} from 'sls-aws/src/client/logic/api/lenses'

const { viewEndpointId } = generalApiModuleDescriptionLenses

export const moduleEndpointIdSelectorHof = moduleDescriptionsObj => (
	state, { moduleId },
) => (
	viewEndpointId(moduleId, moduleDescriptionsObj)
)

export default moduleEndpointIdSelectorHof(moduleDescriptions)
