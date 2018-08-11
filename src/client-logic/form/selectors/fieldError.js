import { or } from 'ramda'

import { formStoreLenses } from 'sls-aws/src/client-logic/form/lenses'

const {
	pathOrFieldErrorsChild, viewDirty, viewFormSubmitted,
} = formStoreLenses

export default (state, { moduleKey, fieldId }) => (
	or(
		viewFormSubmitted(moduleKey, state),
		viewDirty(moduleKey, fieldId, state)
	) ? pathOrFieldErrorsChild(moduleKey, fieldId, '', state) : ''
)
