import currentRouteParams from 'root/src/client/logic/route/selectors/currentRouteParams'

const mockState = {
	route: {
		history: [
			{ routeId: 'test', routeParams: { test: true } },
		],
	},
}

describe('currentRouteParams', () => {
	test('works', () => {
		console.log(currentRouteParams(mockState))
		expect(
			currentRouteParams(mockState),
		).toEqual({ test: true })
	})
})
