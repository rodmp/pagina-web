import { SUBMIT_FORM } from 'root/src/client/logic/form/actionIds'
import {
	formStoreLenses,
} from 'root/src/client/logic/form/lenses'

const { setFormSubmitting, setFormSubmitted } = formStoreLenses

export default {
	[SUBMIT_FORM]: (state, { moduleKey, submitIndex }) => setFormSubmitting(
		moduleKey,
		submitIndex,
		setFormSubmitted(moduleKey, true, state),
	),
}
