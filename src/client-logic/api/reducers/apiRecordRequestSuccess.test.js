import {
	apiRecordRequestSuccess,
} from 'sls-aws/src/client-logic/api/reducers/apiRecordRequestSuccess'

describe('apiRecordRequestSuccess', () => {
	test('sets records', () => {
		const reduced = apiRecordRequestSuccess(
			{},
			{
				recordType: 'mockRecordType',
				record: { id: 'mockRecordId', data: 'mockData' },
			},
		)
		expect(reduced).toEqual({
			api: {
				records: {
					'mockRecordType-mockRecordId': {
						id: 'mockRecordId', data: 'mockData',
					},
				},
				recordProcessing: {
					'mockRecordType-mockRecordId': false,
				},
			},
		})
	})
})
