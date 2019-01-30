import { RESET_PASSWORD_FORM_MODULE_ID } from 'sls-aws/src/shared/descriptions/modules/moduleIds'

import resetPassword from 'sls-aws/src/client/logic/cognito/thunks/resetPassword'

export default {
	[RESET_PASSWORD_FORM_MODULE_ID]: [
		{
			action: resetPassword,
		},
	],
}
