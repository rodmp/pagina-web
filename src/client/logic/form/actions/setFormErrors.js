import { SET_FORM_ERRORS } from 'root/src/client/logic/form/actionIds'

export default (moduleKey, errors) => ({
	type: SET_FORM_ERRORS,
	payload: { moduleKey, errors },
})
