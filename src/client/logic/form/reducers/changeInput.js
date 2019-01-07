import { compose, set, lensPath } from 'ramda'

import { CHANGE_INPUT } from 'sls-aws/src/client/logic/form/actionIds'
import {
	formStoreLenses,
} from 'sls-aws/src/client/logic/form/lenses'

const { overFormInputs, overFieldData } = formStoreLenses

export default {
	[CHANGE_INPUT]: (state, { moduleKey, fieldPath, value }) => {
		const path = lensPath(fieldPath)
		return compose(
			overFormInputs(moduleKey, set(path, value)),
			overFieldData(
				moduleKey, set(lensPath([...fieldPath, 'dirty']), true)
			),
		)(state)
	},
}
