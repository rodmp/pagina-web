import { VIEW_PROJECT_MODULE_ID } from 'root/src/shared/descriptions/modules/moduleIds'

import getProject from 'root/src/client/logic/project/thunks/getProject'

export default {
	[VIEW_PROJECT_MODULE_ID]: {
		onEnterActions: [getProject],
	},
}
