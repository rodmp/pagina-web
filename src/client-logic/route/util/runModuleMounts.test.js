import { forEach } from 'ramda'

import {
	runModuleMountsHof,
} from 'sls-aws/src/client-logic/route/util/runModuleMounts'

const ROUTE_MOCK_1 = 'ROUTE_MOCK_1'
const ROUTE_MOCK_2 = 'ROUTE_MOCK_2'
const ROUTE_MOCK_3 = 'ROUTE_MOCK_3'
const ROUTE_MOCK_4 = 'ROUTE_MOCK_4'

const MODULE_MOCK_1 = 'MODULE_MOCK_1'
const MODULE_MOCK_2 = 'MODULE_MOCK_2'
const MODULE_MOCK_3 = 'MODULE_MOCK_3'
const MODULE_MOCK_4 = 'MODULE_MOCK_4'
const MODULE_MOCK_5 = 'MODULE_MOCK_5'

const mockRouteDescriptions = {
	[ROUTE_MOCK_1]: {
		modules: [
			MODULE_MOCK_1,
			MODULE_MOCK_2,
		]
	},
	[ROUTE_MOCK_2]: {
		modules: [
			MODULE_MOCK_3,
		]
	},
	[ROUTE_MOCK_3]: {
		modules: [
			MODULE_MOCK_4,
		]
	},
	[ROUTE_MOCK_4]: {
		modules: [
			MODULE_MOCK_5,
		]
	},
}

const mockModuleDescriptions = {
	[MODULE_MOCK_1]: {
		onEnterActions: [jest.fn(), jest.fn()],
		onExitActions: [jest.fn(), jest.fn()],
	},
	[MODULE_MOCK_2]: {
		onEnterActions: [jest.fn(), jest.fn()],
		onExitActions: [jest.fn(), jest.fn()],
	},
	[MODULE_MOCK_3]: {
		onEnterActions: [jest.fn(), jest.fn()],
		onExitActions: [jest.fn(), jest.fn()],
	},
	[MODULE_MOCK_4]: {
		onEnterActions: [jest.fn(), jest.fn()],
	},
	[MODULE_MOCK_5]: {},
}

const mockState = {
	route: {
		history: [
			{ routeId: ROUTE_MOCK_1 },
		]
	}
}

const runModuleMounts = runModuleMountsHof(
	mockRouteDescriptions, mockModuleDescriptions,
)

describe('runModuleMounts', () => {
	const moduleMountPromise =  runModuleMounts(
		{ routeId: ROUTE_MOCK_2, routeParams: {} }, mockState,
	)
	test('Correct actions run', () => moduleMountPromise.then(() => {
		forEach(
			(action) => {
				expect(action).toHaveBeenCalled()
			},
			[
				...mockModuleDescriptions[MODULE_MOCK_1].onExitActions,
				...mockModuleDescriptions[MODULE_MOCK_2].onExitActions,
				...mockModuleDescriptions[MODULE_MOCK_3].onEnterActions,
			]
		)
	}))
	test('Other actions don\'t run', () => moduleMountPromise.then(() => {
		forEach(
			(action) => {
				expect(action).not.toHaveBeenCalled()
			},
			[
				...mockModuleDescriptions[MODULE_MOCK_1].onEnterActions,
				...mockModuleDescriptions[MODULE_MOCK_2].onEnterActions,
				...mockModuleDescriptions[MODULE_MOCK_3].onExitActions,
			]
		)
	}))

	const moduleMountEmptyStatePromise =  runModuleMounts(
		{ routeId: ROUTE_MOCK_3, routeParams: {} }, {},
	)
	test(
		'First state on enter actions',
		() => moduleMountEmptyStatePromise.then(
			() => {
				forEach(
					(action) => {
						expect(action).toHaveBeenCalled()
					},
					mockModuleDescriptions[MODULE_MOCK_4].onEnterActions,
				)
			}
		)
	)

	const noExitActionsMockState = {
		route: {
			history: [
				{ routeId: ROUTE_MOCK_3 },
			]
		}
	}
	const noActionsMountPromise =  runModuleMounts(
		{ routeId: ROUTE_MOCK_4, routeParams: {} }, noExitActionsMockState,
	)
	test(
		'Doesn\'t break if no actions',
		() => noActionsMountPromise.then(() => {
			expect(noActionsMountPromise).resolves
		})
	)
})
