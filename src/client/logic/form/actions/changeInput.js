import { CHANGE_INPUT } from 'root/src/client/logic/form/actionIds'

export default (moduleKey, fieldPath, value) => ({
	type: CHANGE_INPUT,
	payload: {
		moduleKey,
		fieldPath,
		value,
	},
})
