import {
	initApiRecordRequest,
} from 'root/src/client/logic/api/reducers/initApiRecordRequest'

describe('initApiRecordRequest', () => {
	test('sets records', () => {
		const reduced = initApiRecordRequest(
			{},
			{
				recordType: 'mockRecordType',
				recordId: 'mockRecordId',
			},
		)
		expect(reduced).toEqual({
			api: {
				recordProcessing: {
					'mockRecordType-mockRecordId': true,
				},
			},
		})
	})
})
