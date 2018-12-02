import {
	initApiListRequest,
} from 'sls-aws/src/client-logic/api/reducers/initApiListRequest'

describe('initApiListRequest', () => {
	test('sets list ids and records', () => {
		const reduced = initApiListRequest(
			{},
			{
				listTypeFilterHash: 'mockHash',
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
