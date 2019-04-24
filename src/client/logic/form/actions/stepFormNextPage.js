import { STEP_FORM_NEXT_PAGE } from 'root/src/client/logic/form/actionIds'

export default moduleKey => ({
	type: STEP_FORM_NEXT_PAGE,
	payload: {
		moduleKey,
	},
})
