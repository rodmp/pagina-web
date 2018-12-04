import endpointDescriptions from 'sls-aws/src/descriptions/endpoints'
import {
	endpointDescriptionLenses,
} from 'sls-aws/src/descriptions/endpoints/lenses'

const { viewEndpointType } = endpointDescriptionLenses

export const endpointTypeSelectorHof = endpointDescriptionsObj => endpointId => (
	viewEndpointType(endpointId, endpointDescriptionsObj)
)

export default endpointTypeSelectorHof(endpointDescriptions)
