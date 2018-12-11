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
		],
	},
	[ROUTE_MOCK_2]: {
		modules: [
			MODULE_MOCK_3,
		],
	},
	[ROUTE_MOCK_3]: {
		modules: [
			MODULE_MOCK_4,
		],
	},
	[ROUTE_MOCK_4]: {
		modules: [
			MODULE_MOCK_5,
		],
	},
}

const mockModuleMountActions = {
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
		],
	},
}

const runModuleMounts = runModuleMountsHof(
	mockRouteDescriptions, mockModuleMountActions,
)

const mockDispatch = () => {}

describe('runModuleMounts', () => {
	test('Correct actions run, other actions dont', async () => {
		await runModuleMounts(
			{ routeId: ROUTE_MOCK_2, routeParams: {} }, mockState,
		)(mockDispatch)
		forEach(
			(action) => {
				expect(action).toHaveBeenCalled()
			},
			[
				...mockModuleMountActions[MODULE_MOCK_1].onExitActions,
				...mockModuleMountActions[MODULE_MOCK_2].onExitActions,
				...mockModuleMountActions[MODULE_MOCK_3].onEnterActions,
			],
		)
		forEach(
			(action) => {
				expect(action).not.toHaveBeenCalled()
			},
			[
				...mockModuleMountActions[MODULE_MOCK_1].onEnterActions,
				...mockModuleMountActions[MODULE_MOCK_2].onEnterActions,
				...mockModuleMountActions[MODULE_MOCK_3].onExitActions,
			],
		)
	})

	test('First state on enter actions', async () => {
		await runModuleMounts(
			{ routeId: ROUTE_MOCK_3, routeParams: {} }, {},
		)(mockDispatch)
		forEach(
			(action) => {
				expect(action).toHaveBeenCalled()
			},
			mockModuleMountActions[MODULE_MOCK_4].onEnterActions,
		)
	})

	test('Doesn\'t break if no actions', async () => {
		const noExitActionsMockState = {
			route: {
				history: [
					{ routeId: ROUTE_MOCK_3 },
				],
			},
		}
		const noActionsMountPromise = runModuleMounts(
			{ routeId: ROUTE_MOCK_4, routeParams: {} }, noExitActionsMockState,
		)(mockDispatch)
		await noActionsMountPromise
		expect(noActionsMountPromise).resolves
	})
})
