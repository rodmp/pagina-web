import { SUBMIT_FORM } from 'sls-aws/src/client-logic/form/actionIds'
import {
	formStoreLenses,
} from 'sls-aws/src/client-logic/form/lenses'

const { setFormSubmitting, setFormSubmitted } = formStoreLenses

export default {
	[SUBMIT_FORM]: (state, { moduleKey, submitIndex }) => setFormSubmitting(
		moduleKey,
		submitIndex,
		setFormSubmitted(moduleKey, true, state)
	)
}
