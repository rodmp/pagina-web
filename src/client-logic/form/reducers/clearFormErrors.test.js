import clearFormErrors from 'sls-aws/src/client-logic/form/reducers/clearFormErrors'
import { CLEAR_FORM_ERRORS } from 'sls-aws/src/client-logic/form/actionIds'

const mockState = {
	form: {
		test: {
			formData: {
				errors: { foo: 'bar' },
			}
		}
	},
}

const mockAction = {
	formHash: 'test',
	errorObj: { foo: 'bar' },
}

describe('clearFormErrors', () => {
	test('works normally', () => {
		expect(
			clearFormErrors[CLEAR_FORM_ERRORS](mockState, mockAction)
		).toEqual({
			form: {
				test: {
					formData: {}
				}
			},
		})
	})
})
