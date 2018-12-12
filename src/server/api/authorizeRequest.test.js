import { authorizeRequestHof } from 'sls-aws/src/server/api/authorizeRequest'

import { authenticated, admin } from 'sls-aws/src/constants/authenticationTypes'

const getAuthenticationFn = jest.fn()
const getCognitoUserFn = jest.fn()

const authorizeRequest = authorizeRequestHof(
	getAuthenticationFn, getCognitoUserFn,
)

const mockEndpointId = 'MOCK_ENDPOINT_ID'
const mockAuthentication = 'aJwtToken'

const regularUser = { cognitoUser: { sub: 'mockUserId' } }
const adminUser = {
	cognitoUser: {
		sub: 'mockAdminUserId',
		'cognito:groups': [admin],
	},
}

describe('authorizeRequest', () => {
	test('no auth required', async () => {
		getAuthenticationFn.mockReturnValueOnce(undefined)
		const userId = await authorizeRequest(mockEndpointId, mockAuthentication)
		expect(userId).toBeUndefined()
	})
	test('auth required, user authenticated', async () => {
		getAuthenticationFn.mockReturnValueOnce(authenticated)
		getCognitoUserFn.mockReturnValueOnce(
			Promise.resolve(regularUser),
		)
		const userId = await authorizeRequest(mockEndpointId, mockAuthentication)
		expect(userId).toEqual('user-mockUserId')
	})
	test('auth required, user not authenticated', async () => {
		getAuthenticationFn.mockReturnValueOnce(authenticated)
		getCognitoUserFn.mockReturnValueOnce(
			Promise.resolve({ error: 'MOCK_VALIDATION_ERROR' }),
		)
		let errorObj
		try {
			await authorizeRequest(mockEndpointId, mockAuthentication)
		} catch (error) {
			errorObj = error
		}
		expect(errorObj).toEqual({
			generalErrors: 'MOCK_VALIDATION_ERROR',
			statusCode: 403,
		})
	})
	test('admin required, user is admin', async () => {
		getAuthenticationFn.mockReturnValueOnce(admin)
		getCognitoUserFn.mockReturnValueOnce(
			Promise.resolve(adminUser),
		)
		const userId = await authorizeRequest(mockEndpointId, mockAuthentication)
		expect(userId).toEqual('user-mockAdminUserId')
	})
	test('admin required, user is not admin', async () => {
		getAuthenticationFn.mockReturnValueOnce(admin)
		getCognitoUserFn.mockReturnValueOnce(
			Promise.resolve(regularUser),
		)
		let errorObj
		try {
			await authorizeRequest(mockEndpointId, mockAuthentication)
		} catch (error) {
			errorObj = error
		}
		expect(errorObj).toEqual({
			generalErrors: 'Must be admin user',
			statusCode: 403,
		})
	})
})
