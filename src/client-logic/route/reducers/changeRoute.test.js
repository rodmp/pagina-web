import changeRoute from 'sls-aws/src/client-logic/route/reducers/changeRoute'
import { CHANGE_ROUTE } from 'sls-aws/src/client-logic/route/actionIds'

const mockState = {
	route: { history: [] },
}

const mockActionPayload = {
	routeId: 'test', routeParams: { test: true },
}

const mockActionPayload2 = {
	routeId: 'test2', routeParams: { test: true },
}

describe('changeRoute', () => {
	test('works normally', () => {
		expect(
			changeRoute[CHANGE_ROUTE](mockState, mockActionPayload)
		).toEqual({
			route: {
				history: [
					{ routeId: 'test', routeParams: { test: true } }
				]
			},
		})
	})

	test('empty state', () => {
		expect(
			changeRoute[CHANGE_ROUTE]({}, mockActionPayload)
		).toEqual({
			route: {
				history: [
					{ routeId: 'test', routeParams: { test: true } }
				]
			},
		})
	})

	test('multiple', () => {
		const currentState = changeRoute[CHANGE_ROUTE]({}, mockActionPayload)
		expect(
			changeRoute[CHANGE_ROUTE](currentState, mockActionPayload2)
		).toEqual({
			route: {
				history: [
					{ routeId: 'test2', routeParams: { test: true } },
					{ routeId: 'test', routeParams: { test: true } },
				]
			},
		})
	})
})
