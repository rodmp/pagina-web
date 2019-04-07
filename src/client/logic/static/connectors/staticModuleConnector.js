import reduxConnector from 'root/src/shared/util/reduxConnector'

import staticPageTypeSelector from 'root/src/client/logic/static/selectors/staticPageTypeSelector'
import pageContentSelector from 'root/src/client/logic/static/selectors/pageContentSelector'

export default reduxConnector(
	[
		['staticPageType', staticPageTypeSelector],
		['pageContent', pageContentSelector],
	],
)
