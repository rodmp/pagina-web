import {
	CLAIM_PROJECT_FORM_MODULE_ID,
} from 'root/src/shared/descriptions/modules/moduleIds'

import claimProject from 'root/src/client/logic/project/thunks/claimProject'
import rejectProject from 'root/src/client/logic/project/thunks/rejectProject'
import claimProjectOnSuccess from 'root/src/client/logic/project/thunks/claimProjectOnSuccess'

export default {
	[CLAIM_PROJECT_FORM_MODULE_ID]: [
		{
			action: claimProject,
			onSuccess: claimProjectOnSuccess,
		},
		{
			action: rejectProject,
			onSuccess: claimProjectOnSuccess,
		},
	],
}
