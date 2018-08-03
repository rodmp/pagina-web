import { SUBMIT_FORM } from 'sls-aws/src/client-logic/form/actionIds'

export default formHash => ({
	type: SUBMIT_FORM,
	payload: { formHash }
})
