import { FORGOT_PASSWORD_FORM_MODULE_ID } from 'sls-aws/src/shared/descriptions/modules/moduleIds'

import forgotPassword from 'sls-aws/src/client/logic/cognito/thunks/forgotPassword'

export default {
	[FORGOT_PASSWORD_FORM_MODULE_ID]: [
		{
			action: forgotPassword,
		},
	],
}
