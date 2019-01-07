import { LOGIN_FORM_MODULE_ID } from 'sls-aws/src/shared/descriptions/modules/moduleIds'

import login from 'sls-aws/src/client/logic/cognito/thunks/login'

export default {
	[LOGIN_FORM_MODULE_ID]: [
		{
			action: login,
		},
	],
}
