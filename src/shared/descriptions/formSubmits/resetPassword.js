import { RESET_PASSWORD_FORM_MODULE_ID } from 'root/src/shared/descriptions/modules/moduleIds'

import resetPassword from 'root/src/client/logic/cognito/thunks/resetPassword'

export default {
	[RESET_PASSWORD_FORM_MODULE_ID]: [
		{
			action: resetPassword,
		},
	],
}
