import { length } from 'ramda'

import { formStoreLenses } from 'root/src/client/logic/form/lenses'

const { pathOrFormInputsChild } = formStoreLenses

export default (state, { moduleKey, fieldId }) => {
	const fieldLength = length(
		pathOrFormInputsChild(moduleKey, fieldId, [], state),
	)
	return fieldLength > 1 ? fieldLength : 1
}
