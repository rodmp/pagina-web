import {
	apiRecordRequestError,
} from 'root/src/client/logic/api/reducers/apiRecordRequestError'

describe('apiRecordRequestError', () => {
	test('sets record errors', () => {
		const reduced = apiRecordRequestError(
			{},
			{
				recordType: 'mockRecordType',
				recordId: 'mockRecordId',
				error: 'mockError',
			},
		)
		expect(reduced).toEqual({
			api: {
				recordErrors: {
					'mockRecordType-mockRecordId': 'mockError',
				},
				recordProcessing: {
					'mockRecordType-mockRecordId': false,
				},
			},
		})
	})
})
