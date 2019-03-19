import { CLEAR_FORM } from 'root/src/client/logic/form/actionIds'

import {
	formStoreLenses,
} from 'root/src/client/logic/form/lenses'

const { dissocPathFormChild } = formStoreLenses

export const reducer = (state, { moduleKey }) => dissocPathFormChild(
	moduleKey,
	state,
)

export default {
	[CLEAR_FORM]: reducer,
}
