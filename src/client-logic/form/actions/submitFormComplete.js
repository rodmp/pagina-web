import { SUBMIT_FORM_COMPLETE } from 'sls-aws/src/client-logic/form/actionIds'

export default moduleKey => ({
	type: SUBMIT_FORM_COMPLETE,
	payload: { moduleKey }
})
