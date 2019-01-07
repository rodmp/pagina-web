import { equals, isNil } from 'ramda'

import { projectApprovedKey } from 'sls-aws/src/server/api/lenses'
import statusSelector from 'sls-aws/src/client/logic/project/selectors/statusSelector'
import isAuthenticated from 'sls-aws/src/client/logic/auth/selectors/isAuthenticated'
import myPledgeSelector from 'sls-aws/src/client/logic/project/selectors/myPledgeSelector'

export default (state, props) => (
	equals(statusSelector(state, props), projectApprovedKey) &&
	isAuthenticated(state, props) &&
	isNil(myPledgeSelector(state, props))
)
