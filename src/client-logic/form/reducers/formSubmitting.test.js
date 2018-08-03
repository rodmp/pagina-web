import formSubmitting from 'sls-aws/src/client-logic/form/reducers/formSubmitting'
import { FORM_SUBMITTING } from 'sls-aws/src/client-logic/form/actionIds'

const mockState = {}

const mockAction = {
	formHash: 'test',
}

describe('formSubmitting', () => {
	test('works normally', () => {
		expect(
			formSubmitting[FORM_SUBMITTING](mockState, mockAction)
		).toEqual({
			form: {
				test: {
					formData: {
						formSubmitting: true,
						formSubmitted: true,
					}
				}
			},
		})
	})
})
