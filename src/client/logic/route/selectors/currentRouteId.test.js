import currentRouteId from 'root/src/client/logic/route/selectors/currentRouteId'

const mockState = { route: { history: [{ routeId: 'test', routeParams: {} }] } }

describe('currentRouteId', () => {
	test('works', () => {
		expect(
			currentRouteId(mockState)
		).toEqual('test')
	})
})
