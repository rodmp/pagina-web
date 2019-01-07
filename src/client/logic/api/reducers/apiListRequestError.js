import { compose } from 'ramda'

import { API_LIST_REQUEST_ERROR } from 'sls-aws/src/client/logic/api/actionIds'
import {
	apiStoreLenses,
} from 'sls-aws/src/client/logic/api/lenses'

const { setListErrorsChild, setListProcessingChild } = apiStoreLenses

export const apiListRequestError = (state, { listStoreKey, error }) => (
	compose(
		setListErrorsChild(listStoreKey, error),
		setListProcessingChild(listStoreKey, false),
	)(state)
)

export default {
	[API_LIST_REQUEST_ERROR]: apiListRequestError,
}
