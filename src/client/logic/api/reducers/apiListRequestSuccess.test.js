import {
	apiListRequestSuccess,
} from 'sls-aws/src/client/logic/api/reducers/apiListRequestSuccess'

describe('apiListRequestSuccess', () => {
	test('sets list ids and records', () => {
		const reduced = apiListRequestSuccess(
			{},
			{
				listStoreKey: 'mockListStoreKey',
				recordType: 'mockRecordType',
				list: {
					next: 'mockNextPageKey',
					items: [
						{ id: 'mockId1', data: 'mockData' },
						{ id: 'mockId2', data: 'mockData' },
					],
				},
			},
		)
		expect(reduced).toEqual({
			api: {
				lists: {
					mockListStoreKey: {
						next: 'mockNextPageKey',
						items: [
							'mockId1',
							'mockId2',
						],
					},
				},
				listProcessing: {
					mockListStoreKey: false,
				},
				records: {
					'mockRecordType-mockId1': {
						id: 'mockId1',
						data: 'mockData',
					},
					'mockRecordType-mockId2': {
						id: 'mockId2',
						data: 'mockData',
					},
				},
			},
		})
	})
})
