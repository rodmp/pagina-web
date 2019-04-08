import { CHANGE_PASSWORD_FORM_MODULE_ID } from 'root/src/shared/descriptions/modules/moduleIds'

import changePassword from 'root/src/client/logic/cognito/thunks/changePassword'

export default {
	[CHANGE_PASSWORD_FORM_MODULE_ID]: [
		{
			action: changePassword,
		},
	],
}
