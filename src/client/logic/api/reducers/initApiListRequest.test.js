import {
	initApiListRequest,
} from 'root/src/client/logic/api/reducers/initApiListRequest'

describe('initApiListRequest', () => {
	test('sets list ids and records', () => {
		const reduced = initApiListRequest(
			{},
			{
				listStoreKey: 'mockHash',
			},
		)
		expect(reduced).toEqual({
			api: {
				listProcessing: {
					mockHash: true,
				},
			},
		})
	})
})
