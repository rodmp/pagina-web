import endpointDescriptions from 'sls-aws/src/shared/descriptions/endpoints'
import {
	endpointDescriptionLenses,
} from 'sls-aws/src/shared/descriptions/endpoints/lenses'

const { viewRecordType } = endpointDescriptionLenses

export const recordTypeSelectorHof = endpointDescriptionsObj => endpointId => (
	viewRecordType(endpointId, endpointDescriptionsObj)
)

export default recordTypeSelectorHof(endpointDescriptions)
