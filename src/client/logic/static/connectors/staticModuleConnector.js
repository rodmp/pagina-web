import reduxConnector from 'sls-aws/src/shared/util/reduxConnector'

import staticPageTypeSelector from 'sls-aws/src/client/logic/static/selectors/staticPageTypeSelector'
import pageContentSelector from 'sls-aws/src/client/logic/static/selectors/pageContentSelector'

export default reduxConnector(
	[
		['staticPageType', staticPageTypeSelector],
		['pageContent', pageContentSelector],
	],
)
