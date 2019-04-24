import changeInput from 'root/src/client/logic/form/reducers/changeInput'
import { CHANGE_INPUT } from 'root/src/client/logic/form/actionIds'

const mockState = {}

const mockActionPayload = {
	moduleKey: 'test',
	fieldPath: ['foo', 0],
	value: 'bar',
}

describe('changeInput', () => {
	test('works normally', () => {
		expect(
			changeInput[CHANGE_INPUT](mockState, mockActionPayload),
		).toEqual({
			form: {
				test: {
					formInputs: {
						foo: ['bar'],
					},
					fieldData: {
						foo: [
							{ dirty: true }
						],
					},
				},
			},
		})
	})
})
