import {
	PLEDGE_PROJECT_FORM_MODULE_ID,
} from 'sls-aws/src/shared/descriptions/modules/moduleIds'

import pledgeProject from 'sls-aws/src/client/logic/project/thunks/pledgeProject'
import createPledgeOnSuccess from 'sls-aws/src/client/logic/project/thunks/createPledgeOnSuccess'

export default {
	[PLEDGE_PROJECT_FORM_MODULE_ID]: [
		{
			action: pledgeProject,
			onSuccess: createPledgeOnSuccess,
		},
	],
}
