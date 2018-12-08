import reduxConnector from 'sls-aws/src/util/reduxConnector'

import projectTitleSelector from 'sls-aws/src/client-logic/project/selectors/projectTitleSelector'
import projectDescriptionSelector from 'sls-aws/src/client-logic/project/selectors/projectDescriptionSelector'
import pledgeAmountSelector from 'sls-aws/src/client-logic/project/selectors/pledgeAmountSelector'
import myPledgeSelector from 'sls-aws/src/client-logic/project/selectors/myPledgeSelector'
import statusSelector from 'sls-aws/src/client-logic/project/selectors/statusSelector'
import projectAssigneesSelector from 'sls-aws/src/client-logic/project/selectors/projectAssigneesSelector'


export default reduxConnector(
	[
		['projectDescription', projectDescriptionSelector],
		['projectTitle', projectTitleSelector],
		['pledgeAmount', pledgeAmountSelector],
		['myPledge', myPledgeSelector],
		['status', statusSelector],
		['assignees', projectAssigneesSelector],
	],
	// [['setInput', setInput]],
)
