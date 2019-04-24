import { equals } from 'ramda'

import stepFormCurrentPage from 'root/src/client/logic/form/selectors/stepFormCurrentPage'

export default (state, props) => equals(
	stepFormCurrentPage(state, props),
	0,
)
