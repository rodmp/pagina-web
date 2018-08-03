import setFormErrors from 'sls-aws/src/client-logic/form/reducers/setFormErrors'
import { SET_FORM_ERRORS } from 'sls-aws/src/client-logic/form/actionIds'

const mockState = {}

const mockAction = {
	formHash: 'test',
	errorObj: { foo: 'bar' },
}

describe('setFormErrors', () => {
	test('works normally', () => {
		expect(
			setFormErrors[SET_FORM_ERRORS](mockState, mockAction)
		).toEqual({
			form: {
				test: {
					formData: {
						errors: { foo: 'bar' },
					}
				}
			},
		})
	})
})
