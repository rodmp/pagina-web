import { SET_FORM_ERRORS } from 'sls-aws/src/client/logic/form/actionIds'

import {
	formStoreLenses,
} from 'sls-aws/src/client/logic/form/lenses'

const { setFieldErrors } = formStoreLenses

export const reducer = (state, { moduleKey, errors }) => setFieldErrors(
	moduleKey,
	errors,
	state,
)

export default {
	[SET_FORM_ERRORS]: reducer,
}
