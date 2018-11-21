import { REMOVE_SUB_FORM } from 'sls-aws/src/client-logic/form/actionIds'
import {
	formStoreLenses,
} from 'sls-aws/src/client-logic/form/lenses'

const { dissocPathAssigneesItem } = formStoreLenses

export default {
	[REMOVE_SUB_FORM]: (state, { moduleKey, fieldId, subFormIndex }) => (
		dissocPathAssigneesItem(
			moduleKey,
			fieldId,
			subFormIndex,
			state,
		)
	),
}
