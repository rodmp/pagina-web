import moduleDescriptions from 'root/src/shared/descriptions/modules'
import {
	generalApiModuleDescriptionLenses,
} from 'root/src/client/logic/api/lenses'


const { viewFormPayload } = generalApiModuleDescriptionLenses

export const moduleEndpointIdSelectorHof = moduleDescriptionsObj => (
	state, { moduleId },
) => (
	viewFormPayload(moduleId, moduleDescriptionsObj)
)

export default moduleEndpointIdSelectorHof(moduleDescriptions)
