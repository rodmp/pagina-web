import {
	apiListRequestError,
} from 'sls-aws/src/client/logic/api/reducers/apiListRequestError'

describe('apiListRequestError', () => {
	test('sets list errors', () => {
		const reduced = apiListRequestError(
			{},
			{ listStoreKey: 'mockHash', error: 'mockError' },
		)
		expect(reduced).toEqual({
			api: {
				listErrors: {
					mockHash: 'mockError',
				},
				listProcessing: {
					mockHash: false,
				},
			},
		})
	})
})
