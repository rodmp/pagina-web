import { STEP_FORM_PREV_PAGE } from 'root/src/client/logic/form/actionIds'

export default moduleKey => ({
	type: STEP_FORM_PREV_PAGE,
	payload: {
		moduleKey,
	},
})
