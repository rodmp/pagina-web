import { SET_FORM_STRIPE } from 'sls-aws/src/client-logic/form/actionIds'

export default (moduleKey, stripe) => ({
	type: SET_FORM_STRIPE,
	payload: {
		moduleKey,
		stripe,
	},
})
