import reduxConnector from 'root/src/shared/util/reduxConnector'

import getUserDataSelector from 'root/src/client/logic/api/selectors/getUserDataSelector'
import getPageContentSelector from 'root/src/client/logic/api/selectors/getPageContentSelector'

export default reduxConnector(
	[
		['userData', getUserDataSelector],
		['pageContent', getPageContentSelector],
	],
)
