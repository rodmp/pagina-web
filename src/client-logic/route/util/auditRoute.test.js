import { auditRouteHof } from 'sls-aws/src/client-logic/route/util/auditRoute'

const mockRoutes = {
	AUTH_REQUIRED_ROUTE_ID: {
		authentication: 'authenticated',
	},
	UNAUTH_REQUIRED_ROUTE_ID: {
		authentication: 'notAuthenticated',
	},
	EITHER_ROUTE_ID: {
	},
}

const mockAuthenticatedFn = jest.fn()

const auditRoute = auditRouteHof(mockAuthenticatedFn, mockRoutes)

describe('auditRoute', () => {
	test('Authenticated, route auth required', () => {
		mockAuthenticatedFn.mockReturnValueOnce(true)
		expect(auditRoute({ routeId: 'AUTH_REQUIRED_ROUTE_ID' })).toBe(true)
	})
	test('Not authenticated, route auth required', () => {
		mockAuthenticatedFn.mockReturnValueOnce(false)
		expect(auditRoute({ routeId: 'AUTH_REQUIRED_ROUTE_ID' })).toBe(false)
	})
	test('Authenticated, route not auth required', () => {
		mockAuthenticatedFn.mockReturnValueOnce(true)
		expect(auditRoute({ routeId: 'UNAUTH_REQUIRED_ROUTE_ID' })).toBe(false)
	})
	test('Not authenticated, route not auth required', () => {
		mockAuthenticatedFn.mockReturnValueOnce(false)
		expect(auditRoute({ routeId: 'UNAUTH_REQUIRED_ROUTE_ID' })).toBe(true)
	})
	test('Authenticated, route has no auth', () => {
		mockAuthenticatedFn.mockReturnValueOnce(true)
		expect(auditRoute({ routeId: 'EITHER_ROUTE_ID' })).toBe(true)
	})
	test('Not authenticated, route has no auth', () => {
		mockAuthenticatedFn.mockReturnValueOnce(false)
		expect(auditRoute({ routeId: 'EITHER_ROUTE_ID' })).toBe(true)
	})
})
