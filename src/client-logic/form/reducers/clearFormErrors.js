import { CLEAR_FORM_ERRORS } from 'sls-aws/src/client-logic/form/actionIds'

import {
	formStoreLenses, viewPayloadFormHash,
} from 'sls-aws/src/client-logic/form/lenses'

const { dissocPathErrors } = formStoreLenses

export default {
	[CLEAR_FORM_ERRORS]: (state, actionPayload) => dissocPathErrors(
		viewPayloadFormHash(actionPayload),
		state
	)
}
