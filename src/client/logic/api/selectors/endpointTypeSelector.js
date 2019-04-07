import endpointDescriptions from 'root/src/shared/descriptions/endpoints'
import {
	endpointDescriptionLenses,
} from 'root/src/shared/descriptions/endpoints/lenses'

const { viewEndpointType } = endpointDescriptionLenses

export const endpointTypeSelectorHof = endpointDescriptionsObj => endpointId => (
	viewEndpointType(endpointId, endpointDescriptionsObj)
)

export default endpointTypeSelectorHof(endpointDescriptions)
