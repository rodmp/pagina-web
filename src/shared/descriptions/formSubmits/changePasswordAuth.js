import { CHANGE_PASSWORD_AUTH_MODULE_ID } from 'root/src/shared/descriptions/modules/moduleIds'

import changePasswordAuth from 'root/src/client/logic/cognito/thunks/changePasswordAuth'

export default {
	[CHANGE_PASSWORD_AUTH_MODULE_ID]: [
		{
			action: changePasswordAuth,
		},
	],
}
