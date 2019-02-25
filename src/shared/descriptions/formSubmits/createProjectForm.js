import {
	CREATE_PROJECT_FORM_MODULE_ID,
} from 'root/src/shared/descriptions/modules/moduleIds'

import createProject from 'root/src/client/logic/project/thunks/createProject'
import createProjectOnSuccess from 'root/src/client/logic/project/thunks/createProjectOnSuccess'

export default {
	[CREATE_PROJECT_FORM_MODULE_ID]: [
		{
			action: createProject,
			onSuccess: createProjectOnSuccess,
		},
	],
}
