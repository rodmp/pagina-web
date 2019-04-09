import apiRequest from 'root/src/client/logic/api/thunks/apiRequest'

import { UPDATE_PROJECT } from 'root/src/shared/descriptions/endpoints/endpointIds'

export default updatedData => dispatch => dispatch(apiRequest(UPDATE_PROJECT, updatedData))
