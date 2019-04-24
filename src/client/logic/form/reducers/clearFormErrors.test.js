import { reducer } from 'root/src/client/logic/form/reducers/clearFormErrors'

const mockState = {
	form: {
		test: {
			fieldErrors: {
				errors: { foo: 'bar' },
			},
		},
	},
}

const mockAction = {
	moduleKey: 'test',
}

describe('clearFormErrors', () => {
	test('works normally', () => {
		expect(
			reducer(mockState, mockAction),
		).toEqual({
			form: {
				test: {},
			},
		})
	})
})
