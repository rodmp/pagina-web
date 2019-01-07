import { CLEAR_FORM_ERRORS } from 'sls-aws/src/client/logic/form/actionIds'

export default moduleKey => ({
	type: CLEAR_FORM_ERRORS,
	payload: { moduleKey }
})
