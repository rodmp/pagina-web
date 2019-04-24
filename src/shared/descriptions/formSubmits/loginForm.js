import { LOGIN_FORM_MODULE_ID } from 'root/src/shared/descriptions/modules/moduleIds'

import login from 'root/src/client/logic/cognito/thunks/login'

export default {
	[LOGIN_FORM_MODULE_ID]: [
		{
			action: login,
		},
	],
}
