import { compose, pathOr } from 'ramda'

import { formStoreLenses } from 'root/src/client/logic/form/lenses'

const { pathOrFormInputs } = formStoreLenses

export default (state, { moduleKey, fieldPath }) => compose(
	pathOr('', fieldPath),
	pathOrFormInputs(moduleKey, {}),
)(state)
