import { CHANGE_INPUT } from 'sls-aws/src/client-logic/form/actionIds'

export default (formHash, inputId, value) => ({
	type: CHANGE_INPUT,
	payload: {
		formHash,
		inputId,
		value
	}
})
