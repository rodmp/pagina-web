import moduleDescriptions from 'sls-aws/src/descriptions/modules'
import {
	generalApiModuleDescriptionLenses,
} from 'sls-aws/src/client-logic/api/lenses'

const { viewRecordPayloadMap } = generalApiModuleDescriptionLenses

export const moduleEndpointIdSelectorHof = moduleDescriptionsObj => (
	state, { moduleId },
) => (
	viewRecordPayloadMap(moduleId, moduleDescriptionsObj)
)

export default moduleEndpointIdSelectorHof(moduleDescriptions)
