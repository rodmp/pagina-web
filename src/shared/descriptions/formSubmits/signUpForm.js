import { SIGN_UP_FORM_MODULE_ID } from 'root/src/shared/descriptions/modules/moduleIds'

import signUp from 'root/src/client/logic/cognito/thunks/signUp'

export default {
	[SIGN_UP_FORM_MODULE_ID]: [
		{
			action: signUp,
		},
	],
}
