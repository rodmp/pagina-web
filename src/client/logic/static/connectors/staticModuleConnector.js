import reduxConnector from 'sls-aws/src/shared/util/reduxConnector'

import staticPageTypeSelector from 'sls-aws/src/client/logic/static/selectors/staticPageTypeSelector'

export default reduxConnector(
	[
		['staticPageType', staticPageTypeSelector],
	],
)
