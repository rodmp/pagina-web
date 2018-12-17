
import {
	runModuleMountsHof,
} from 'sls-aws/src/client-logic/route/util/runModuleMounts'

const ROUTE_MOCK_1 = 'ROUTE_MOCK_1'
const ROUTE_MOCK_2 = 'ROUTE_MOCK_2'
const ROUTE_MOCK_3 = 'ROUTE_MOCK_3'

const MODULE_MOCK_1 = 'MODULE_MOCK_1'
const MODULE_MOCK_2 = 'MODULE_MOCK_2'
const MODULE_MOCK_3 = 'MODULE_MOCK_3'

const mockRouteDescriptions = {
	[ROUTE_MOCK_1]: {
		modules: [
			MODULE_MOCK_1,
		],
	},
	[ROUTE_MOCK_2]: {
		modules: [
			MODULE_MOCK_2,
		],
	},
	[ROUTE_MOCK_3]: {
		modules: [
			MODULE_MOCK_3,
		],
	},
}

const mockModuleMountActions = {
	[MODULE_MOCK_1]: {
		moduleType: 'list',
	},
	[MODULE_MOCK_2]: {
		moduleType: 'record',
	},
	[MODULE_MOCK_3]: {
		moduleType: 'noMountFnsModuleType',
	},
}

const mockState = {
	route: {
		history: [
			{ routeId: ROUTE_MOCK_1 },
		],
	},
}


const listModuleOnEnterMock = jest.fn()
const recordModuleOnEnterMock = jest.fn()
const mockModuleTypeAction = (moduleType) => {
	switch (moduleType) {
		case 'list':
			return listModuleOnEnterMock
		case 'record':
			return recordModuleOnEnterMock
		default:
	}
}

const runModuleMounts = runModuleMountsHof(
	mockRouteDescriptions, mockModuleMountActions, mockModuleTypeAction,
)

const mockDispatch = () => {}

describe('runModuleMounts', () => {
	test('Correct actions run, other actions dont', async () => {
		await runModuleMounts(
			{ routeId: ROUTE_MOCK_2, routeParams: {} }, mockState,
		)(mockDispatch)
		expect(recordModuleOnEnterMock).toHaveBeenCalled()
	})

	test('First state on enter actions', async () => {
		await runModuleMounts(
			{ routeId: ROUTE_MOCK_1, routeParams: {} }, {},
		)(mockDispatch)
		expect(listModuleOnEnterMock).toHaveBeenCalled()
	})

	test('Doesn\'t break if no actions for moduleType', async () => {
		const noExitActionsMockState = {
			route: {
				history: [
					{ routeId: ROUTE_MOCK_3 },
				],
			},
		}
		const noActionsMountPromise = runModuleMounts(
			{ routeId: ROUTE_MOCK_3, routeParams: {} }, noExitActionsMockState,
		)(mockDispatch)
		await noActionsMountPromise
		expect(noActionsMountPromise).resolves
	})
})
