import { SUBMIT_FORM_COMPLETE } from 'root/src/client/logic/form/actionIds'
import {
	formStoreLenses,
} from 'root/src/client/logic/form/lenses'

const { setFormSubmitting } = formStoreLenses

export default {
	[SUBMIT_FORM_COMPLETE]: (state, { moduleKey }) => setFormSubmitting(
		moduleKey,
		false,
		state
	)
}
