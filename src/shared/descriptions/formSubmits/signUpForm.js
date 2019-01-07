import { SIGN_UP_FORM_MODULE_ID } from 'sls-aws/src/shared/descriptions/modules/moduleIds'

import signUp from 'sls-aws/src/client/logic/cognito/thunks/signUp'

export default {
	[SIGN_UP_FORM_MODULE_ID]: [
		{
			action: signUp,
		},
	],
}
