import { CLEAR_FORM_ERRORS } from 'root/src/client/logic/form/actionIds'

export default moduleKey => ({
	type: CLEAR_FORM_ERRORS,
	payload: { moduleKey },
})
