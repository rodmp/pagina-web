import { FORM_SUBMITTING } from 'sls-aws/src/client-logic/form/actionIds'
import {
	formStoreLenses, viewPayloadFormHash,
} from 'sls-aws/src/client-logic/form/lenses'

const { setFormSubmitting, setFormSubmitted } = formStoreLenses

export default {
	[FORM_SUBMITTING]: (state, actionPayload) => {
		const formHash = viewPayloadFormHash(actionPayload)
		return setFormSubmitting(
			formHash,
			true,
			setFormSubmitted(formHash, true, state)
		)
	}
}
