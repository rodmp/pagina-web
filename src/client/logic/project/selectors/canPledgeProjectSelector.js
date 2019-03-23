import { equals, isNil } from 'ramda'

import { projectApprovedKey, projectRejectedKey } from 'root/src/server/api/lenses'
import statusSelector from 'root/src/client/logic/project/selectors/statusSelector'
import isAuthenticated from 'root/src/client/logic/auth/selectors/isAuthenticated'
import myPledgeSelector from 'root/src/client/logic/project/selectors/myPledgeSelector'

export default (state, props) => (
	equals(statusSelector(state, props), projectApprovedKey) &&
	equals(statusSelector(state, props), projectRejectedKey) &&
	isAuthenticated(state, props) &&
	isNil(myPledgeSelector(state, props))
)
