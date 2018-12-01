import initApiRequest from 'sls-aws/src/client-logic/api/reducers/initApiRequest'
import { INIT_API_REQUEST } from 'sls-aws/src/client-logic/api/actionIds'

const mockState = {}

const mockActionPayload = {
	moduleKey: 'test',
	fieldPath: ['foo', 0],
	value: 'bar',
}

describe('changeInput', () => {
	test('works normally', () => {
		expect(
			initApiRequest[INIT_API_REQUEST](mockState, mockActionPayload),
		).toEqual({})
	})
})
