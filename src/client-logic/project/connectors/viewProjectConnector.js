import reduxConnector from 'sls-aws/src/util/reduxConnector'

import recordIdSelector from 'sls-aws/src/client-logic/api/selectors/recordIdSelector'

import projectTitleSelector from 'sls-aws/src/client-logic/project/selectors/projectTitleSelector'
import projectDescriptionSelector from 'sls-aws/src/client-logic/project/selectors/projectDescriptionSelector'
import pledgeAmountSelector from 'sls-aws/src/client-logic/project/selectors/pledgeAmountSelector'
import myPledgeSelector from 'sls-aws/src/client-logic/project/selectors/myPledgeSelector'
import statusSelector from 'sls-aws/src/client-logic/project/selectors/statusSelector'
import projectAssigneesSelector from 'sls-aws/src/client-logic/project/selectors/projectAssigneesSelector'
import canApproveProjectSelector from 'sls-aws/src/client-logic/project/selectors/canApproveProjectSelector'
import canPledgeProjectSelector from 'sls-aws/src/client-logic/project/selectors/canPledgeProjectSelector'

import pushRoute from 'sls-aws/src/client-logic/route/thunks/pushRoute'

export default reduxConnector(
	[
		['projectId', recordIdSelector],
		['projectDescription', projectDescriptionSelector],
		['projectTitle', projectTitleSelector],
		['pledgeAmount', pledgeAmountSelector],
		['myPledge', myPledgeSelector],
		['status', statusSelector],
		['assignees', projectAssigneesSelector],
		['canApproveProject', canApproveProjectSelector],
		['canPledgeProject', canPledgeProjectSelector],
	],
	[['pushRoute', pushRoute]],
)
