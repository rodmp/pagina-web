import { compose } from 'ramda'

import { API_LIST_REQUEST_ERROR } from 'sls-aws/src/client-logic/api/actionIds'
import {
	apiStoreLenses,
} from 'sls-aws/src/client-logic/api/lenses'

const { setListErrorsChild, setListProcessingChild } = apiStoreLenses

export const apiListRequestError = (state, { listTypeFilterHash, error }) => (
	compose(
		setListErrorsChild(listTypeFilterHash, error),
		setListProcessingChild(listTypeFilterHash, false),
	)(state)
)

export default {
	[API_LIST_REQUEST_ERROR]: apiListRequestError,
}
