import { set, lensPath } from 'ramda'

import changeRoute from 'sls-aws/src/client-logic/route/reducers/changeRoute'
import { CHANGE_ROUTE } from 'sls-aws/src/client-logic/route/actionIds'

const mockState = {
	route: { history: [] },
}

const mockAction = {
	payload: {
		routeId: 'test', routeParams: { test: true },
	},
}

const mockAction2 = set(lensPath(['payload', 'routeId']), 'test2', mockAction)

describe('changeRoute', () => {
	test('works normally', () => {
		expect(
			changeRoute[CHANGE_ROUTE](mockState, mockAction)
		).toEqual({
			route: {
				history: [
					{routeId: 'test', routeParams: { test: true }}
				]
			},
		})
	})

	test('empty state', () => {
		expect(
			changeRoute[CHANGE_ROUTE]({}, mockAction)
		).toEqual({
			route: {
				history: [
					{routeId: 'test', routeParams: { test: true }}
				]
			},
		})
	})

	test('multiple', () => {
		const currentState = changeRoute[CHANGE_ROUTE]({}, mockAction)
		expect(
			changeRoute[CHANGE_ROUTE](currentState, mockAction2)
		).toEqual({
			route: {
				history: [
					{routeId: 'test2', routeParams: { test: true }},
					{routeId: 'test', routeParams: { test: true }},
				]
			},
		})
	})
})
