import { CHANGE_INPUT } from 'sls-aws/src/client-logic/form/actionIds'

export default (moduleKey, fieldPath, value) => ({
	type: CHANGE_INPUT,
	payload: {
		moduleKey,
		fieldPath,
		value,
	},
})
