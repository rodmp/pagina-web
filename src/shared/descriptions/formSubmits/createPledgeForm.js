import {
	PLEDGE_PROJECT_FORM_MODULE_ID,
} from 'root/src/shared/descriptions/modules/moduleIds'

import pledgeProject from 'root/src/client/logic/project/thunks/pledgeProject'
import createPledgeOnSuccess from 'root/src/client/logic/project/thunks/createPledgeOnSuccess'

export default {
	[PLEDGE_PROJECT_FORM_MODULE_ID]: [
		{
			action: pledgeProject,
			onSuccess: createPledgeOnSuccess,
		},
	],
}
