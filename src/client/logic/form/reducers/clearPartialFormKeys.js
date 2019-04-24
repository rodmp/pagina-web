import { CLEAR_PARTIAL_FORM_KEYS } from 'root/src/client/logic/form/actionIds'
import { formStoreLenses } from 'root/src/client/logic/form/lenses'

const { setFormChild } = formStoreLenses

export const clearPartialFormKeys = (state, { moduleKey }) => {
	console.log(moduleKey)
	return setFormChild(`db-${moduleKey}`, {})(state)
}
export default {
	[CLEAR_PARTIAL_FORM_KEYS]: clearPartialFormKeys,
}
