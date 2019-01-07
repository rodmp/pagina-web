import { SET_FORM_STRIPE } from 'sls-aws/src/client/logic/form/actionIds'
import {
	formStoreLenses,
} from 'sls-aws/src/client/logic/form/lenses'

const { setFormStripe } = formStoreLenses

export default {
	[SET_FORM_STRIPE]: (state, { moduleKey, stripe }) => setFormStripe(
		moduleKey, stripe, state,
	),
}
