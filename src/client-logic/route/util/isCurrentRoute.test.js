import isCurrentRoute from 'sls-aws/src/client-logic/route/util/isCurrentRoute'

const mockState = {
	route: {
		history: [
			{
				routeId: 'TEST_ROUTE_ID',
				routeParams: { foo: 'bar' },
			},
			{
				routeId: 'ANOTHER_ROUTE_ID',
				routeParams: { foo: 'bar' },
			},
		],
	},
}

describe('isCurrentRoute', () => {
	test('Route from history matches', () => {
		expect(isCurrentRoute({
			routeId: 'TEST_ROUTE_ID',
			routeParams: { foo: 'bar' },
		}, mockState)).toBe(true)
	})
	test('Route from history isn\'t current', () => {
		expect(isCurrentRoute({
			routeId: 'ANOTHER_ROUTE_ID',
			routeParams: { foo: 'bar' },
		}, mockState)).toBe(false)
	})
	test('Route from history doesn\'t match', () => {
		expect(isCurrentRoute({
			routeId: 'NON_EXISTANT_ROUTE',
			routeParams: { foo: 'bar' },
		}, mockState)).toBe(false)
	})
	test('Route matches, but different params', () => {
		expect(isCurrentRoute({
			routeId: 'NON_EXISTANT_ROUTE',
			routeParams: { foo: 'buz' },
		}, mockState)).toBe(false)
	})
})
