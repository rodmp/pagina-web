import {
	endpointTypeSelectorHof,
} from 'sls-aws/src/client-logic/api/selectors/endpointTypeSelector'

const MOCK_ENDPOINT_ID = 'MOCK_ENDPOINT_ID'

const mockEndpointDescriptions = {
	[MOCK_ENDPOINT_ID]: {
		endpointType: 'list',
	},
}

const endpointTypeSelector = endpointTypeSelectorHof(
	mockEndpointDescriptions,
)

describe('endpointTypeSelectorHof', () => {
	test('returns endpointType from endpoint desc', () => {
		expect(endpointTypeSelector(MOCK_ENDPOINT_ID)).toEqual('list')
	})
})
