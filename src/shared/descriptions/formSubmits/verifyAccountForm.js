import { VERIFY_ACCOUNT_FORM_MODULE_ID } from 'sls-aws/src/shared/descriptions/modules/moduleIds'

import verifyAccount from 'sls-aws/src/client-logic/cognito/thunks/verifyAccount'

export default {
	[VERIFY_ACCOUNT_FORM_MODULE_ID]: [
		{
			action: verifyAccount,
		},
	],
}
