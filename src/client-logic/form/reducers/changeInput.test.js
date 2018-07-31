import changeInput from 'sls-aws/src/client-logic/form/reducers/changeInput'
import { CHANGE_INPUT } from 'sls-aws/src/client-logic/form/actionIds'

const mockState = {}

const mockActionPayload = {
	formHash: 'test',
	inputId: 'foo',
	inputValue: 'bar'
}

describe('changeInput', () => {
	test('works normally', () => {
		expect(
			changeInput[CHANGE_INPUT](mockState, mockActionPayload)
		).toEqual({
			form: {
				test: {
					formInputs: {
						foo: 'bar',
					},
					fieldData: {
						foo: {
							dirty: true,
						},
					},
				},
			},
		})
	})
})
