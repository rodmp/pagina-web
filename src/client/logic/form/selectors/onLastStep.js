import { equals, length, subtract } from 'ramda'

import stepFormCurrentPage from 'root/src/client/logic/form/selectors/stepFormCurrentPage'
import stepForms from 'root/src/client/logic/form/selectors/stepForms'

export default (state, props) => equals(
	stepFormCurrentPage(state, props),
	subtract(length(stepForms(state, props)), 1),
)
