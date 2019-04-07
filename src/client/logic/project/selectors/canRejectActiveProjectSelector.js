import { and, equals } from 'ramda'

import { projectApprovedKey } from 'root/src/server/api/lenses'
import statusSelector from 'root/src/client/logic/project/selectors/statusSelector'
import isAdminSelector from 'root/src/client/logic/auth/selectors/isAdminSelector'

export default (state, props) => and(
	equals(statusSelector(state, props), projectApprovedKey),
	isAdminSelector(state, props),
)
