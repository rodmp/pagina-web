import {
	CREATE_PROJECT_FORM_MODULE_ID,
} from 'sls-aws/src/shared/descriptions/modules/moduleIds'

import createProject from 'sls-aws/src/client/logic/project/thunks/createProject'
import createProjectOnSuccess from 'sls-aws/src/client/logic/project/thunks/createProjectOnSuccess'

export default {
	[CREATE_PROJECT_FORM_MODULE_ID]: [
		{
			action: createProject,
			onSuccess: createProjectOnSuccess,
		},
	],
}
