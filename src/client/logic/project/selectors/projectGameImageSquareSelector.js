import stringFormat from 'string-format'

import projectGameImageSelector from 'root/src/client/logic/project/selectors/projectGameImageSelector'

export default (state, props) => stringFormat(
	projectGameImageSelector(state, props),
	{ width: 500, height: 500 },
)
