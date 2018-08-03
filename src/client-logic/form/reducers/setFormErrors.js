import { SET_FORM_ERRORS } from 'sls-aws/src/client-logic/form/actionIds'

import {
	formStoreLenses, viewPayloadFormHash, viewPayloadErrorObj,
} from 'sls-aws/src/client-logic/form/lenses'

const { setErrors } = formStoreLenses

export default {
	[SET_FORM_ERRORS]: (state, actionPayload) => setErrors(
		viewPayloadFormHash(actionPayload),
		viewPayloadErrorObj(actionPayload),
		state
	)
}
