import { SET_FORM_ERRORS } from 'sls-aws/src/client/logic/form/actionIds'

export default (moduleKey, errors) => ({
	type: SET_FORM_ERRORS,
	payload: { moduleKey, errors },
})
