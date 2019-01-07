import { and, equals } from 'ramda'

import { projectPendingKey } from 'sls-aws/src/server/api/lenses'
import statusSelector from 'sls-aws/src/client/logic/project/selectors/statusSelector'
import isAdminSelector from 'sls-aws/src/client/logic/auth/selectors/isAdminSelector'

export default (state, props) => and(
	equals(statusSelector(state, props), projectPendingKey),
	isAdminSelector(state, props),
)
