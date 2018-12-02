import { API_LIST_REQUEST_ERROR } from 'sls-aws/src/client-logic/api/actionIds'
import {
	apiStoreLenses,
} from 'sls-aws/src/client-logic/api/lenses'

const { setListErrorsChild } = apiStoreLenses

export const apiListRequestError = (state, { listTypeFilterHash, error }) => (
	setListErrorsChild(listTypeFilterHash, error, state)
)

export default {
	[API_LIST_REQUEST_ERROR]: apiListRequestError,
}
