import { CLEAR_FORM_ERRORS } from 'root/src/client/logic/form/actionIds'

import {
	formStoreLenses,
} from 'root/src/client/logic/form/lenses'

const { dissocPathFieldErrors } = formStoreLenses

export const reducer = (state, { moduleKey }) => dissocPathFieldErrors(
	moduleKey,
	state,
)

export default {
	[CLEAR_FORM_ERRORS]: reducer,
}
