import reduxConnector from 'root/src/shared/util/reduxConnector'

import getExternalSelector from 'root/src/client/logic/api/selectors/getExternalSelector'

export default reduxConnector(
	[
		['external', getExternalSelector],
	],
)
