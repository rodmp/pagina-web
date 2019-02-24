import { SET_FORM_STRIPE } from 'root/src/client/logic/form/actionIds'

export default (moduleKey, stripe) => ({
	type: SET_FORM_STRIPE,
	payload: {
		moduleKey,
		stripe,
	},
})
