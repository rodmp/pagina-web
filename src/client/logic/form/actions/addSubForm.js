import { ADD_SUB_FORM } from 'sls-aws/src/client/logic/form/actionIds'

export default (moduleKey, fieldId) => ({
	type: ADD_SUB_FORM,
	payload: {
		moduleKey,
		fieldId,
	},
})
