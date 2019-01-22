import reduxConnector from 'sls-aws/src/shared/util/reduxConnector'

import projectTitleSelector from 'sls-aws/src/client/logic/project/selectors/projectTitleSelector'
import projectDescriptionSelector from 'sls-aws/src/client/logic/project/selectors/projectDescriptionSelector'
import pledgeAmountSelector from 'sls-aws/src/client/logic/project/selectors/pledgeAmountSelector'
import projectGameImagePortraitSelector from 'sls-aws/src/client/logic/project/selectors/projectGameImagePortraitSelector'
import projectAssigneesImagesSelector from 'sls-aws/src/client/logic/project/selectors/projectAssigneesImagesSelector'
import projectShareUrlSelector from 'sls-aws/src/client/logic/project/selectors/projectShareUrlSelector'

import pushRoute from 'sls-aws/src/client/logic/route/thunks/pushRoute'

export default reduxConnector(
	[
		['projectDescription', projectDescriptionSelector],
		['projectTitle', projectTitleSelector],
		['pledgeAmount', pledgeAmountSelector],
		['projectGameImage', projectGameImagePortraitSelector],
		['projectAssigneesImages', projectAssigneesImagesSelector],
		['projectShareUrl', projectShareUrlSelector],
	],
	[['pushRoute', pushRoute]],
)
