import { SET_FORM_STRIPE } from 'root/src/client/logic/form/actionIds'
import {
	formStoreLenses,
} from 'root/src/client/logic/form/lenses'

const { setFormStripe } = formStoreLenses

export default {
	[SET_FORM_STRIPE]: (state, { moduleKey, stripe }) => setFormStripe(
		moduleKey, stripe, state,
	),
}
