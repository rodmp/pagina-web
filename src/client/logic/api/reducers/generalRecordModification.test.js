import {
	generalRecordModification,
} from 'sls-aws/src/client/logic/api/reducers/generalRecordModification'

describe('initApiListRequest', () => {
	test('sets list ids and records', () => {
		const mockRecordStoreKey = 'mockRecordStoreKey'
		const reduced = generalRecordModification(
			{
				api: {
					records: {
						[mockRecordStoreKey]: {
							turnThisFalse: true,
							turnThisTrue: false,
						},
					},
				},
			},
			{
				subs: { recordStoreKey: 'mockRecordStoreKey' },
				updates: [
					{
						modification: 'set',
						path: [':recordStoreKey', 'turnThisFalse'],
						value: false,
					},
					{
						modification: 'set',
						path: [':recordStoreKey', 'turnThisTrue'],
						value: true,
					},
				],
			},
		)
		expect(reduced).toEqual({
			api: {
				records: {
					[mockRecordStoreKey]: {
						turnThisFalse: false,
						turnThisTrue: true,
					},
				},
			},
		})
	})
})
