import apiRequest from 'root/src/client/logic/api/thunks/apiRequest'

import { GET_CARD_LIST } from 'root/src/shared/descriptions/endpoints/endpointIds'

export default () => async dispatch => dispatch(apiRequest(GET_CARD_LIST))
