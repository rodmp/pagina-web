import moduleDescriptions from 'root/src/shared/descriptions/modules'
import {
	generalApiModuleDescriptionLenses,
} from 'root/src/client/logic/api/lenses'


const { viewListPayload } = generalApiModuleDescriptionLenses

export const moduleEndpointIdSelectorHof = moduleDescriptionsObj => (
	state, { moduleId },
) => (
	viewListPayload(moduleId, moduleDescriptionsObj)
)

export default moduleEndpointIdSelectorHof(moduleDescriptions)
