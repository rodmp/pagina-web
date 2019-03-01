import reduxConnector from 'root/src/shared/util/reduxConnector'

import getExternalDataSelector from 'root/src/client/logic/api/selectors/getExternalDataSelector'
import getPageContentSelector from 'root/src/client/logic/api/selectors/getPageContentSelector'

export default reduxConnector(
	[
		['externalData', getExternalDataSelector],
		['pageContent', getPageContentSelector],
	],
)
