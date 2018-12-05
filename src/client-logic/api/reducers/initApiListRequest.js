import { INIT_API_LIST_REQUEST } from 'sls-aws/src/client-logic/api/actionIds'

import { apiStoreLenses } from 'sls-aws/src/client-logic/api/lenses'

const { setListProcessingChild } = apiStoreLenses

export const initApiListRequest = (
	state,
	{ listStoreKey },
) => setListProcessingChild(listStoreKey, true, state)

export default {
	[INIT_API_LIST_REQUEST]: initApiListRequest,
}
