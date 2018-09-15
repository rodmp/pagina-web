import { assocPath } from 'ramda'
import { apiHof } from 'sls-aws/src/server/api'

// api(event, context, callback)

const MOCK_ENDPOINT_ID = 'MOCK_ENDPOINT_ID'
const mockEndpoints = {
	[MOCK_ENDPOINT_ID]: {
		authentication: '',
		action: payload => Promise.resolve(payload),
		toRepresentation: payload => Promise.resolve(payload),
		toInternalValue: payload => Promise.resolve(payload),
		payloadSchema: {},
		responseSchema: {},
	},
}


describe('api', () => {
	test('Endpoint not found', () => {
		const api = apiHof(mockEndpoints)
		const mockLambdaCallback = jest.fn()
		const apiCall = api({ endpointId: 'foo' }, {}, mockLambdaCallback)
		return apiCall.then(() => {
			expect(mockLambdaCallback).toHaveBeenCalledWith(null, {
				statusCode: 404,
				body: { generalError: 'Endpoint foo not found' },
			})
		})
	})

	test('Payload schema invalid', () => {
		const api = apiHof(assocPath(
			[MOCK_ENDPOINT_ID, 'payloadSchema'],
			{ type: 'object', properties: { foo: { type: 'string' } } },
			mockEndpoints,
		))
		const mockLambdaCallback = jest.fn()
		const apiCall = api(
			{ endpointId: MOCK_ENDPOINT_ID, payload: { foo: 1 } },
			{},
			mockLambdaCallback,
		)
		return apiCall.then(() => {
			expect(mockLambdaCallback).toHaveBeenCalledWith(null, {
				statusCode: 400,
				body: { schemaErrors: { foo: 'Foo should be a string' } },
			})
		})
	})
})
