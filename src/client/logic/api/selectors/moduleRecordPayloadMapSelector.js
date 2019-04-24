import moduleDescriptions from 'root/src/shared/descriptions/modules'
import {
	generalApiModuleDescriptionLenses,
} from 'root/src/client/logic/api/lenses'

const { viewRecordPayloadMap } = generalApiModuleDescriptionLenses

export const moduleEndpointIdSelectorHof = moduleDescriptionsObj => (
	state, { moduleId },
) => (
	viewRecordPayloadMap(moduleId, moduleDescriptionsObj)
)

export default moduleEndpointIdSelectorHof(moduleDescriptions)
