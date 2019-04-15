import reduxConnector from 'root/src/shared/util/reduxConnector'

import recordIdSelector from 'root/src/client/logic/api/selectors/recordIdSelector'

import projectTitleSelector from 'root/src/client/logic/project/selectors/projectTitleSelector'
import projectDescriptionSelector from 'root/src/client/logic/project/selectors/projectDescriptionSelector'
import pledgeAmountSelector from 'root/src/client/logic/project/selectors/pledgeAmountSelector'
import myPledgeSelector from 'root/src/client/logic/project/selectors/myPledgeSelector'
import statusSelector from 'root/src/client/logic/project/selectors/statusSelector'
import projectAssigneesSelector from 'root/src/client/logic/project/selectors/projectAssigneesSelector'
import projectGameImageSquareSelector from 'root/src/client/logic/project/selectors/projectGameImageSquareSelector'
import canApproveProjectSelector from 'root/src/client/logic/project/selectors/canApproveProjectSelector'
import canRejectProjectSelector from 'root/src/client/logic/project/selectors/canRejectProjectSelector'
import canRejectActiveProjectSelector from 'root/src/client/logic/project/selectors/canRejectActiveProjectSelector'
import canPledgeProjectSelector from 'root/src/client/logic/project/selectors/canPledgeProjectSelector'
import getUserDataSelector from 'root/src/client/logic/api/selectors/getUserDataSelector'
import isAuthenticatedSelector from 'root/src/client/logic/auth/selectors/isAuthenticated'

import canEditProjectDetailsSelector from 'root/src/client/logic/project/selectors/canEditProjectDetailsSelector'
import pledgersSelector from 'root/src/client/logic/project/selectors/pledgersSelector'
import createdSelector from 'root/src/client/logic/project/selectors/createdSelector'

import pushRoute from 'root/src/client/logic/route/thunks/pushRoute'
import updateProject from 'root/src/client/logic/project/thunks/updateProject'

export default reduxConnector(
	[
		['projectId', recordIdSelector],
		['projectDescription', projectDescriptionSelector],
		['projectTitle', projectTitleSelector],
		['pledgeAmount', pledgeAmountSelector],
		['created', createdSelector],
		['myPledge', myPledgeSelector],
		['status', statusSelector],
		['pledgers', pledgersSelector],
		['assignees', projectAssigneesSelector],
		['gameImage', projectGameImageSquareSelector],
		['canApproveProject', canApproveProjectSelector],
		['canPledgeProject', canPledgeProjectSelector],
		['userData', getUserDataSelector],
		['isAuthenticated', isAuthenticatedSelector],
		['canRejectProject', canRejectProjectSelector],
		['canRejectActiveProject', canRejectActiveProjectSelector],
		['isAuthenticated', isAuthenticatedSelector],
		['canEditProjectDetails', canEditProjectDetailsSelector],
	],
	[
		['pushRoute', pushRoute],
		['updateProject', updateProject],
	],
)
