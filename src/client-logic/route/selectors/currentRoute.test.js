import currentRoute from 'sls-aws/src/client-logic/route/selectors/currentRoute'

const mockState = { route: { history: [{ routeId: 'test', routeParams: {} }] } }

describe('currentRoute', () => {
	test('works', () => {
		expect(
			currentRoute(mockState)
		).toEqual({ routeId: 'test', routeParams: {} })
	})
})
