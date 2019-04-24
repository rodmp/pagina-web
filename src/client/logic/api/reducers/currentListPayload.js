import { CURRENT_LIST_PAYLOAD } from 'root/src/client/logic/api/actionIds'

import { apiStoreLenses } from 'root/src/client/logic/api/lenses'

const { setListProcessingChild } = apiStoreLenses

export const currentListPayload = (state, payload) => setListProcessingChild('payload', payload, state)

export default {
	[CURRENT_LIST_PAYLOAD]: currentListPayload,
}
