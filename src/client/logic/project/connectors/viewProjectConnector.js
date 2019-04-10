import reduxConnector from 'root/src/shared/util/reduxConnector'

import recordIdSelector from 'root/src/client/logic/api/selectors/recordIdSelector'

import projectTitleSelector from 'root/src/client/logic/project/selectors/projectTitleSelector'
import projectDescriptionSelector from 'root/src/client/logic/project/selectors/projectDescriptionSelector'
import pledgeAmountSelector from 'root/src/client/logic/project/selectors/pledgeAmountSelector'
import myPledgeSelector from 'root/src/client/logic/project/selectors/myPledgeSelector'
import favoritesAmountSelector from 'root/src/client/logic/project/selectors/favoritesAmountSelector'
import myFavoritesSelector from 'root/src/client/logic/project/selectors/myFavoritesSelector'
import statusSelector from 'root/src/client/logic/project/selectors/statusSelector'
import projectAssigneesSelector from 'root/src/client/logic/project/selectors/projectAssigneesSelector'
import projectGameImageSquareSelector from 'root/src/client/logic/project/selectors/projectGameImageSquareSelector'
import canApproveProjectSelector from 'root/src/client/logic/project/selectors/canApproveProjectSelector'
import canRejectProjectSelector from 'root/src/client/logic/project/selectors/canRejectProjectSelector'
import canRejectActiveProjectSelector from 'root/src/client/logic/project/selectors/canRejectActiveProjectSelector'
import canPledgeProjectSelector from 'root/src/client/logic/project/selectors/canPledgeProjectSelector'
import canEditProjectDetailsSelector from 'root/src/client/logic/project/selectors/canEditProjectDetailsSelector'
import isAuthenticatedSelector from 'root/src/client/logic/auth/selectors/isAuthenticated'
import pledgersSelector from 'root/src/client/logic/project/selectors/pledgersSelector'

import pushRoute from 'root/src/client/logic/route/thunks/pushRoute'
import addToFavorites from 'root/src/client/logic/project/thunks/addToFavorites'
import removeToFavorites from 'root/src/client/logic/project/thunks/removeToFavorites'
import updateProject from 'root/src/client/logic/project/thunks/updateProject'

export default reduxConnector(
	[
		['projectId', recordIdSelector],
		['projectDescription', projectDescriptionSelector],
		['projectTitle', projectTitleSelector],
		['pledgeAmount', pledgeAmountSelector],
		['myPledge', myPledgeSelector],
		['favoritesAmount', favoritesAmountSelector],
		['myFavorites', myFavoritesSelector],
		['status', statusSelector],
		['pledgers', pledgersSelector],
		['assignees', projectAssigneesSelector],
		['gameImage', projectGameImageSquareSelector],
		['canApproveProject', canApproveProjectSelector],
		['canPledgeProject', canPledgeProjectSelector],
		['canRejectProject', canRejectProjectSelector],
		['canRejectActiveProject', canRejectActiveProjectSelector],
		['isAuthenticated', isAuthenticatedSelector],
		['canEditProjectDetails', canEditProjectDetailsSelector],
	],
	[
		['pushRoute', pushRoute],
		['updateProject', updateProject],
		['addToFavorites', addToFavorites],
		['removeToFavorites', removeToFavorites],
	],
)
