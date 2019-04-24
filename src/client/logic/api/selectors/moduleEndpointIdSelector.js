import moduleDescriptions from 'root/src/shared/descriptions/modules'
import {
	generalApiModuleDescriptionLenses,
} from 'root/src/client/logic/api/lenses'

const { viewEndpointId } = generalApiModuleDescriptionLenses

export const moduleEndpointIdSelectorHof = moduleDescriptionsObj => (
	state, { moduleId },
) => (
	viewEndpointId(moduleId, moduleDescriptionsObj)
)

export default moduleEndpointIdSelectorHof(moduleDescriptions)
