import { reduce, append, compose } from 'ramda'

import { API_LIST_REQUEST_SUCCESS } from 'sls-aws/src/client-logic/api/actionIds'

import { apiStoreLenses } from 'sls-aws/src/client-logic/api/lenses'

const { setListProcessingChild } = apiStoreLenses

export const initApiListRequest = (
	state,
	{ listTypeFilterHash },
) => setListProcessingChild(listTypeFilterHash, true, state)

export default {
	[API_LIST_REQUEST_SUCCESS]: initApiListRequest,
}
