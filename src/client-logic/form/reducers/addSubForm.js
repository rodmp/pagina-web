import { concat, length } from 'ramda'

import { ADD_SUB_FORM } from 'sls-aws/src/client-logic/form/actionIds'
import {
	formStoreLenses,
} from 'sls-aws/src/client-logic/form/lenses'

const { setFormInputsChild, pathOrFormInputsChild } = formStoreLenses

export default {
	[ADD_SUB_FORM]: (state, { moduleKey, fieldId }) => {
		const currentValues = pathOrFormInputsChild(
			moduleKey, fieldId, [], state,
		)
		const currentLength = length(currentValues)
		const blankSubformObjects = currentLength === 0 ? [{}, {}] : [{}]
		return setFormInputsChild(
			moduleKey,
			fieldId,
			concat(currentValues, blankSubformObjects),
			state,
		)
	},
}
