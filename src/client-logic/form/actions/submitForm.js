import { SUBMIT_FORM } from 'sls-aws/src/client-logic/form/actionIds'

export default (moduleKey, submitIndex) => ({
	type: SUBMIT_FORM,
	payload: { moduleKey, submitIndex },
})
