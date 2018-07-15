import {
	dispatchNewRouteHof,
} from 'sls-aws/src/client-logic/route/util/dispatchNewRoute'

const defaultMockRoute = { routeId: 'DEFAULT_ROUTE_ID', routeParams: {} }

const auditRouteFn = jest.fn()
const defaultRouteFn = jest.fn().mockReturnValue(defaultMockRoute)
const changeRouteFn = (routeId, routeParams) => ({ routeId, routeParams })
const changeBrowserHistoryFn = jest.fn()
const urlFromRouteObjFn = () => '/test/url'
const isCurrentRouteFn = jest.fn()
const dispatchFn = jest.fn()
const getStateFn = jest.fn()

const dispatchNewRoute = dispatchNewRouteHof(
	auditRouteFn,
	defaultRouteFn,
	changeRouteFn,
	changeBrowserHistoryFn,
	urlFromRouteObjFn,
	isCurrentRouteFn,
	dispatchFn,
	getStateFn,
)

const mockRoute = { routeId: 'MOCK_ROUTE_ID', routeParams: {} }

describe('dispatchNewRoute', () => {
	afterEach(jest.clearAllMocks)

	test('Dispatch initial route passes auth', () => {
		isCurrentRouteFn.mockReturnValueOnce(false)
		auditRouteFn.mockReturnValueOnce(true)
		dispatchNewRoute(mockRoute, 'initial')
		expect(dispatchFn).toHaveBeenCalledWith(mockRoute)
		expect(changeBrowserHistoryFn).toHaveBeenCalledWith(
			'replace', '/test/url', mockRoute
		)
	})
	test('Dispatch initial route fails auth', () => {
		isCurrentRouteFn.mockReturnValueOnce(false)
		auditRouteFn.mockReturnValueOnce(false)
		dispatchNewRoute(mockRoute, 'initial')
		expect(dispatchFn).toHaveBeenCalledWith(defaultMockRoute)
		expect(changeBrowserHistoryFn).toHaveBeenCalledWith(
			'replace', '/test/url', defaultMockRoute
		)
	})

	test('Dispatch route is current route', () => {
		isCurrentRouteFn.mockReturnValueOnce(true)
		dispatchNewRoute(mockRoute, 'initial')
		expect(dispatchFn).not.toHaveBeenCalled()
		expect(changeBrowserHistoryFn).not.toHaveBeenCalled()
	})

	test('Dispatch route passes auth', () => {
		isCurrentRouteFn.mockReturnValueOnce(false)
		auditRouteFn.mockReturnValueOnce(true)
		dispatchNewRoute(mockRoute)
		expect(dispatchFn).toHaveBeenCalledWith(mockRoute)
		expect(changeBrowserHistoryFn).toHaveBeenCalledWith(
			'push', '/test/url', mockRoute
		)
	})

	test('Dispatch route fails auth, currently on default route', () => {
		isCurrentRouteFn.mockReturnValueOnce(false)
		auditRouteFn.mockReturnValueOnce(false)
		isCurrentRouteFn.mockReturnValueOnce(true)
		dispatchNewRoute(mockRoute)
		expect(dispatchFn).not.toHaveBeenCalled()
		expect(changeBrowserHistoryFn).not.toHaveBeenCalled()
	})

	test('Dispatch route fails auth, route isn\'t default', () => {
		isCurrentRouteFn.mockReturnValueOnce(false)
		auditRouteFn.mockReturnValueOnce(false)
		isCurrentRouteFn.mockReturnValueOnce(false)
		dispatchNewRoute(mockRoute)
		expect(dispatchFn).toHaveBeenCalledWith(defaultMockRoute)
		expect(changeBrowserHistoryFn).toHaveBeenCalledWith(
			'push', '/test/url', defaultMockRoute
		)
	})

})
