import { PLEDGE_PROJECT_FORM_MODULE_ID } from 'root/src/shared/descriptions/modules/moduleIds'

import getCreditCardList from 'root/src/client/logic/form/thunks/getCreditCardList'

export default {
	[PLEDGE_PROJECT_FORM_MODULE_ID]: {
		onEnterActions: [getCreditCardList],
	},
}
