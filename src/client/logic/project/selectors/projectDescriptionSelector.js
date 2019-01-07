import getRecordSelector from 'sls-aws/src/client/logic/api/selectors/getRecordSelector'

import { GET_PROJECT } from 'sls-aws/src/shared/descriptions/endpoints/endpointIds'
import { getResponseLenses } from 'sls-aws/src/server/api/getEndpointDesc'

const responseLenses = getResponseLenses(GET_PROJECT)
const { viewDescription } = responseLenses

export default (state, props) => viewDescription(
	getRecordSelector(state, props),
)
