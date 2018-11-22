import { or, view, pathOr, lensPath } from 'ramda'

import { formStoreLenses } from 'sls-aws/src/client-logic/form/lenses'

const {
	pathOrFieldErrors, pathOrFieldData, viewFormSubmitted,
} = formStoreLenses

export default (state, { moduleKey, fieldPath }) => (
	or(
		// is form submitted
		viewFormSubmitted(moduleKey, state),
		// is field dirty
		view(
			lensPath([...fieldPath, 'dirty']),
			pathOrFieldData(moduleKey, {}, state),
		),
	) ? pathOr(
			'',
			fieldPath,
			pathOrFieldErrors(moduleKey, {}, state),
		) : ''
)
