import endpointDescriptions from 'root/src/shared/descriptions/endpoints'
import {
	endpointDescriptionLenses,
} from 'root/src/shared/descriptions/endpoints/lenses'

const { viewRecordType } = endpointDescriptionLenses

export const recordTypeSelectorHof = endpointDescriptionsObj => endpointId => (
	viewRecordType(endpointId, endpointDescriptionsObj)
)

export default recordTypeSelectorHof(endpointDescriptions)
