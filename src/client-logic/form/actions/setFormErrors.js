import { SET_FORM_ERRORS } from 'sls-aws/src/client-logic/form/actionIds'

export default (formHash, errorObj) => ({
	type: SET_FORM_ERRORS,
	payload: { formHash, errorObj }
})
