import createReducer from 'root/src/shared/util/createReducer'
import reportError from 'root/src/shared/util/reportError'

jest.mock('root/src/shared/util/reportError')

const mockReducers = {
	TEST_ACTION: (state, payload) => payload.test,
	MODIFY_ACTION: (state, payload) => ({
		test: `${state.test} - ${payload.test}`,
	}),
}

const testInitialState = { test: true }

const reducer = createReducer(mockReducers, testInitialState)

describe('createReducer', () => {
	test('Working normally', () => {
		expect(
			reducer(null, { type: 'TEST_ACTION', payload: { test: 'test' } }),
		).toBe('test')
	})

	test('Error reporting', () => {
		expect(
			reducer(undefined, { type: 'BAD_ACTION' }),
		).toEqual({ test: true })
		expect(reportError).toBeCalled()
	})

	test('Initial state', () => {
		expect(
			reducer(
				{ test: 'foo' },
				{ type: 'MODIFY_ACTION', payload: { test: 'bar' } },
			),
		).toEqual({ test: 'foo - bar' })
	})
})
