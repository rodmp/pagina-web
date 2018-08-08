import { CLEAR_FORM_ERRORS } from 'sls-aws/src/client-logic/form/actionIds'

import {
	formStoreLenses,
} from 'sls-aws/src/client-logic/form/lenses'

const { dissocPathFieldErrors } = formStoreLenses

export default {
	[CLEAR_FORM_ERRORS]: (state, { moduleKey }) => dissocPathFieldErrors(
		moduleKey,
		state
	)
}
