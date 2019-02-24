import { apiHof } from 'root/src/server/api'

// api(event, context, callback)

const mockContext = {}
const MOCK_ENDPOINT_ID = 'MOCK_ENDPOINT_ID'


const serverEndpointsMock = {
	[MOCK_ENDPOINT_ID]: ({ payload }) => Promise.resolve(payload),
}
const getPayloadSchemaFnMock = jest.fn()
const getResultSchemaFnMock = jest.fn()
const getAuthenticationFnMock = jest.fn()
const testEndpointExistsFnMock = jest.fn()

const apiFn = apiHof(
	serverEndpointsMock, getPayloadSchemaFnMock, getResultSchemaFnMock,
	getAuthenticationFnMock, testEndpointExistsFnMock,
)

describe('api', () => {
	test('Endpoint not found', async () => {
		testEndpointExistsFnMock.mockReturnValueOnce(undefined)
		const apiResult = await apiFn(
			{ endpointId: 'foo', payload: {} }, mockContext,
		)
		expect(apiResult).toEqual({
			statusCode: 404,
			generalErrors: 'Endpoint foo not found',
		})
	})

	test('Payload schema invalid', async () => {
		testEndpointExistsFnMock.mockReturnValueOnce(true)
		getPayloadSchemaFnMock.mockReturnValueOnce({
			type: 'object', properties: { foo: { type: 'string' } },
		})
		const apiCall = await apiFn(
			{ endpointId: MOCK_ENDPOINT_ID, payload: { foo: 1 } }, mockContext,
		)
		expect(apiCall).toEqual({
			statusCode: 400,
			schemaErrors: { foo: 'Foo should be a string' },
		})
	})

	test('Payload schema valid', async () => {
		testEndpointExistsFnMock.mockReturnValueOnce(true)
		getPayloadSchemaFnMock.mockReturnValueOnce({
			type: 'object', properties: { foo: { type: 'string' } },
		})
		const payload = { foo: 'a string' }
		const apiCall = await apiFn(
			{ endpointId: MOCK_ENDPOINT_ID, payload },
			mockContext,
		)
		expect(apiCall).toEqual({
			statusCode: 200,
			body: payload,
		})
	})
	test('Result schema valid', async () => {
		testEndpointExistsFnMock.mockReturnValueOnce(true)
		getPayloadSchemaFnMock.mockReturnValueOnce({
			type: 'object', properties: { foo: { type: 'string' } },
		})
		getResultSchemaFnMock.mockReturnValueOnce({
			type: 'object', properties: { foo: { type: 'integer' } },
		})
		const payload = { foo: 'a string' }
		const apiCall = await apiFn(
			{ endpointId: MOCK_ENDPOINT_ID, payload },
			mockContext,
		)
		expect(apiCall).toEqual({
			statusCode: 500,
			schemaErrors: { foo: 'Foo should be a integer' },
		})
	})
})
