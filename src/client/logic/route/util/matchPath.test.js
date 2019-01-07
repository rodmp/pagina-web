import {
	matchPathHof,
} from 'sls-aws/src/client/logic/route/util/matchPath'

const mockRoutes = {
	ROUTE_ID_1: { url: '/foo' },
	ROUTE_ID_2: { url: '/bar/:buz' },
	ROUTE_ID_3: { url: '/bop/:buz/:bees' },
	ROUTE_ID_4: { url: '/bop/:buz/:bees' },
}

const matchPath = matchPathHof(mockRoutes)

describe('matchPath', () => {
	test('Matches plain path', () => {
		expect(matchPath('/foo')).toEqual({
			routeId: 'ROUTE_ID_1',
			routeParams: {}
		})
	})

	test('Matches path with variable', () => {
		expect(matchPath('/bar/bing')).toEqual({
			routeId: 'ROUTE_ID_2',
			routeParams: { buz: 'bing' },
		})
	})

	test('Matches path with 2 variables', () => {
		expect(matchPath('/bop/bing/bear')).toEqual({
			routeId: 'ROUTE_ID_3',
			routeParams: { buz: 'bing', bees: 'bear' },
		})
	})

	test('Doesn\'t match', () => {
		expect(matchPath('/nomatch/sorry')).toBeUndefined()
	})
})
