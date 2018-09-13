import { apiHof } from 'sls-aws/src/server/api'

// api(event, context, callback)

describe('api', () => {
	test('Endpoint not found', () => {
		const api = apiHof({})
		const mockCallback = jest.fn()
		return api({ endpointId: 'foo' }, {}, mockCallback).then(() => {
			expect(mockCallback).toHaveBeenCalledWith(null, {
				statusCode: 404,
				body: { generalError: 'Endpoint foo not found' },
			})
		})
	})
})
