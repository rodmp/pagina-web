import { assocPath } from 'ramda'
import { apiHof } from 'sls-aws/src/server/api'

// api(event, context, callback)

const mockContext = {}
const MOCK_ENDPOINT_ID = 'MOCK_ENDPOINT_ID'
const mockEndpoints = {
	[MOCK_ENDPOINT_ID]: {
		authentication: '',
		action: payload => Promise.resolve(payload),
		toRepresentation: payload => Promise.resolve(payload),
		toInternalValue: payload => Promise.resolve(payload),
		payloadSchema: null,
		responseSchema: null,
	},
}


describe('api', () => {
	test('Endpoint not found', () => {
		const api = apiHof(mockEndpoints)
		const mockLambdaCallback = jest.fn()
		const apiCall = api(
			{ endpointId: 'foo' }, mockContext, mockLambdaCallback,
		)
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
			mockContext,
			mockLambdaCallback,
		)
		return apiCall.then(() => {
			expect(mockLambdaCallback).toHaveBeenCalledWith(null, {
				statusCode: 400,
				body: { schemaErrors: { foo: 'Foo should be a string' } },
			})
		})
	})

	test('Payload schema valid', () => {
		const api = apiHof(assocPath(
			[MOCK_ENDPOINT_ID, 'payloadSchema'],
			{ type: 'object', properties: { foo: { type: 'string' } } },
			mockEndpoints,
		))
		const payload = { foo: 'a string' }
		const mockLambdaCallback = jest.fn()
		const apiCall = api(
			{ endpointId: MOCK_ENDPOINT_ID, payload },
			mockContext,
			mockLambdaCallback,
		)
		return apiCall.then(() => {
			expect(mockLambdaCallback).toHaveBeenCalledWith(null, {
				statusCode: 200,
				body: payload,
			})
		})
	})

	test('To internal value', () => {
		const mutation = 'foo bar'
		const payload = 'test payload'
		const api = apiHof(assocPath(
			[MOCK_ENDPOINT_ID, 'toInternalValue'],
			() => Promise.resolve(mutation),
			mockEndpoints,
		))
		const mockLambdaCallback = jest.fn()
		const apiCall = api(
			{ endpointId: MOCK_ENDPOINT_ID, payload },
			mockContext,
			mockLambdaCallback,
		)
		return apiCall.then(() => {
			expect(mockLambdaCallback).toHaveBeenCalledWith(null, {
				statusCode: 200,
				body: mutation,
			})
		})
	})

	test('Action', () => {
		const res = ' test action result'
		const payload = 'test payload'
		const api = apiHof(assocPath(
			[MOCK_ENDPOINT_ID, 'action'],
			pl => Promise.resolve(`${pl}${res}`),
			mockEndpoints,
		))
		const mockLambdaCallback = jest.fn()
		const apiCall = api(
			{ endpointId: MOCK_ENDPOINT_ID, payload },
			mockContext,
			mockLambdaCallback,
		)
		return apiCall.then(() => {
			expect(mockLambdaCallback).toHaveBeenCalledWith(null, {
				statusCode: 200,
				body: payload + res,
			})
		})
	})

	test('To representation', () => {
		const mutation = 'foo bar'
		const payload = 'test payload'
		const api = apiHof(assocPath(
			[MOCK_ENDPOINT_ID, 'toRepresentation'],
			() => Promise.resolve(mutation),
			mockEndpoints,
		))
		const mockLambdaCallback = jest.fn()
		const apiCall = api(
			{ endpointId: MOCK_ENDPOINT_ID, payload },
			mockContext,
			mockLambdaCallback,
		)
		return apiCall.then(() => {
			expect(mockLambdaCallback).toHaveBeenCalledWith(null, {
				statusCode: 200,
				body: mutation,
			})
		})
	})
})
