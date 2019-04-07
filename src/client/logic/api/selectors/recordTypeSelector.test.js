import {
	recordTypeSelectorHof,
} from 'root/src/client/logic/api/selectors/recordTypeSelector'

const MOCK_ENDPOINT_ID = 'MOCK_ENDPOINT_ID'

const mockEndpointDescriptions = {
	[MOCK_ENDPOINT_ID]: {
		recordType: 'project',
	},
}

const recordTypeSelector = recordTypeSelectorHof(
	mockEndpointDescriptions,
)

describe('recordTypeSelectorHof', () => {
	test('returns recordType from endpoint desc', () => {
		expect(recordTypeSelector(MOCK_ENDPOINT_ID)).toEqual('project')
	})
})
