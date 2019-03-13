import { equals, isNil } from 'ramda'

import { projectApprovedKey } from 'root/src/server/api/lenses'
import statusSelector from 'root/src/client/logic/project/selectors/statusSelector'
import myPledgeSelector from 'root/src/client/logic/project/selectors/myPledgeSelector'

export default (state, props) => (
	equals(statusSelector(state, props), projectApprovedKey)
	&& isNil(myPledgeSelector(state, props))
)
