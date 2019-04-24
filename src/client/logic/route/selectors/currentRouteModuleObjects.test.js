import {
	currentRouteModuleObjectsHof,
} from 'root/src/client/logic/route/selectors/currentRouteModuleObjects'

const mockState = {
	route: {
		history: [
			{ routeId: 'ROUTE_ID_1', routeParams: {} }
		]
	}
}

const mockRouteDescriptions = {
	ROUTE_ID_1: {
		modules: [
			'MODULE_ID_1',
			'MODULE_ID_2',
		]
	}
}

const mockModuleDescriptions = {
	MODULE_ID_1: { moduleType: 'foo' },
	MODULE_ID_2: { moduleType: 'bar' },
}

const currentRouteModuleObjects = currentRouteModuleObjectsHof(
	mockRouteDescriptions, mockModuleDescriptions
)

describe('currentRouteModuleObjects', () => {
	test('works', () => {
		expect(
			currentRouteModuleObjects(mockState)
		).toEqual([
			['MODULE_ID_1', { moduleType: 'foo' }],
			['MODULE_ID_2', { moduleType: 'bar' }],
		])
	})
	test('empty array if no route defined', () => {
		expect(
			currentRouteModuleObjects({})
		).toEqual([])
	})
})
