import moduleDescriptions from 'root/src/shared/descriptions/modules'
import {
	generalApiModuleDescriptionLenses,
} from 'root/src/client/logic/api/lenses'

const { viewExternalPayloadMap } = generalApiModuleDescriptionLenses

export const moduleEndpointIdSelectorHof = moduleDescriptionsObj => (
	state, { moduleId },
) => (
		viewExternalPayloadMap(moduleId, moduleDescriptionsObj)
	)
export default moduleEndpointIdSelectorHof(moduleDescriptions)
