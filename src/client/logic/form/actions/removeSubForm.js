import { REMOVE_SUB_FORM } from 'root/src/client/logic/form/actionIds'

export default (moduleKey, fieldId, subFormIndex) => ({
	type: REMOVE_SUB_FORM,
	payload: {
		moduleKey,
		fieldId,
		subFormIndex,
	},
})
