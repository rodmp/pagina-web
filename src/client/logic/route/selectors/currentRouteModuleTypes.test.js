import {
	currentRouteModuleTypesHof,
} from 'root/src/client/logic/route/selectors/currentRouteModuleTypes'

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

const currentRouteModuleTypes = currentRouteModuleTypesHof(
	mockRouteDescriptions, mockModuleDescriptions
)

describe('currentRouteModuleTypes', () => {
	test('works', () => {
		expect(
			currentRouteModuleTypes(mockState)
		).toEqual([
			['MODULE_ID_1', 'foo', 0],
			['MODULE_ID_2', 'bar', 1],
		])
	})
	test('empty array if no route defined', () => {
		expect(
			currentRouteModuleTypes({})
		).toEqual([])
	})
})
