import { equals, isNil } from 'ramda'

import { projectApprovedKey } from 'root/src/server/api/lenses'
import statusSelector from 'root/src/client/logic/project/selectors/statusSelector'
import isAuthenticated from 'root/src/client/logic/auth/selectors/isAuthenticated'
import myPledgeSelector from 'root/src/client/logic/project/selectors/myPledgeSelector'

export default (state, props) => (
	equals(statusSelector(state, props), projectApprovedKey) &&
	isAuthenticated(state, props) &&
	isNil(myPledgeSelector(state, props))
)
