import { FORGOT_PASSWORD_FORM_MODULE_ID } from 'root/src/shared/descriptions/modules/moduleIds'

import forgotPassword from 'root/src/client/logic/cognito/thunks/forgotPassword'

export default {
	[FORGOT_PASSWORD_FORM_MODULE_ID]: [
		{
			action: forgotPassword,
		},
	],
}
