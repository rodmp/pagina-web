import { remove } from 'ramda'

import { REMOVE_SUB_FORM } from 'sls-aws/src/client-logic/form/actionIds'
import {
	formStoreLenses,
} from 'sls-aws/src/client-logic/form/lenses'

const { overFormInputsChild } = formStoreLenses

export default {
	[REMOVE_SUB_FORM]: (state, { moduleKey, fieldId, subFormIndex }) => (
		overFormInputsChild(
			moduleKey,
			fieldId,
			remove(subFormIndex, 1),
			state,
		)
	)
}
