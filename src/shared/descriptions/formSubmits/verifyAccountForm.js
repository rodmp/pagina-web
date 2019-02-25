import { VERIFY_ACCOUNT_FORM_MODULE_ID } from 'root/src/shared/descriptions/modules/moduleIds'

import verifyAccount from 'root/src/client/logic/cognito/thunks/verifyAccount'

export default {
	[VERIFY_ACCOUNT_FORM_MODULE_ID]: [
		{
			action: verifyAccount,
		},
	],
}
