import { VIEW_PROJECT_MODULE_ID } from 'sls-aws/src/descriptions/modules/moduleIds'

import getProject from 'sls-aws/src/client-logic/project/thunks/getProject'

export default {
	[VIEW_PROJECT_MODULE_ID]: {
		onEnterActions: [getProject],
	},
}
