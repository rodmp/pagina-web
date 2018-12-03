import { reducer } from 'sls-aws/src/client-logic/form/reducers/setFormErrors'

const mockState = {}

const mockAction = {
	moduleKey: 'test',
	errors: { foo: 'bar' },
}

describe('setFormErrors', () => {
	test('works normally', () => {
		expect(
			reducer(mockState, mockAction),
		).toEqual({
			form: {
				test: {
					fieldErrors: { foo: 'bar' },
				},
			},
		})
	})
})
