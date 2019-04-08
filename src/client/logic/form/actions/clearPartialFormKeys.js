import { CLEAR_PARTIAL_FORM_KEYS } from 'root/src/client/logic/form/actionIds'

export default moduleKey => ({
	type: CLEAR_PARTIAL_FORM_KEYS,
	payload: {
		moduleKey,
	},
})
