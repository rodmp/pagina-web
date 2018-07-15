import currentRouteParams from 'sls-aws/src/client-logic/route/selectors/currentRouteParams'

const mockState = { route: { history: [
	{ routeId: 'test', routeParams: { test: true} }
] } }

describe('currentRouteParams', () => {
	test('works', () => {
		expect(
			currentRouteParams(mockState)
		).toEqual({ test: true})
	})
})
