import { SUBMIT_FORM } from 'root/src/client/logic/form/actionIds'

export default (moduleKey, submitIndex) => ({
	type: SUBMIT_FORM,
	payload: { moduleKey, submitIndex },
})
