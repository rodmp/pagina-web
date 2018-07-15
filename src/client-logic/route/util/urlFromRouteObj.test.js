import {
	urlFromRouteObjHof,
} from 'sls-aws/src/client-logic/route/util/urlFromRouteObj'

const mockRoutes = {
	ROUTE_ID_1: { url: '/foo' },
	ROUTE_ID_2: { url: '/bar/:buz' },
	ROUTE_ID_3: { url: '/bop/:buz/:bees' },
}

const urlFromRouteObj = urlFromRouteObjHof(mockRoutes)

describe('urlFromRouteObj', () => {
	test('Creates correct url plain path', () => {
		expect(urlFromRouteObj({
			routeId: 'ROUTE_ID_1',
			routeParams: {}
		})).toEqual('/foo')
	})

	test('Creates correct url path with variable', () => {
		expect(urlFromRouteObj({
			routeId: 'ROUTE_ID_2',
			routeParams: { buz: 'bing' },
		})).toEqual('/bar/bing')
	})

	test('Creates correct url path with 2 variables', () => {
		expect(urlFromRouteObj({
			routeId: 'ROUTE_ID_3',
			routeParams: { buz: 'bing', bees: 'bear' },
		})).toEqual('/bop/bing/bear')
	})

	test('Ignores non-existant url params ', () => {
		expect(urlFromRouteObj({
			routeId: 'ROUTE_ID_1',
			routeParams: { bam: 'boom' }
		})).toEqual('/foo')
	})
})
