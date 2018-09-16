import { CHANGE_INPUT } from 'sls-aws/src/client-logic/form/actionIds'

export default (moduleKey, fieldId, value) => ({
	type: CHANGE_INPUT,
	payload: {
		moduleKey,
		fieldId,
		value,
	},
})
