import { SET_FORM_ERRORS } from 'sls-aws/src/client-logic/form/actionIds'

import {
	formStoreLenses,
} from 'sls-aws/src/client-logic/form/lenses'

const { setFieldErrors } = formStoreLenses

export default {
	[SET_FORM_ERRORS]: (state, { moduleKey, errors }) => setFieldErrors(
		moduleKey,
		errors,
		state
	)
}
