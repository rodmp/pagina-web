import getRecordSelector from 'sls-aws/src/client-logic/api/selectors/getRecordSelector'

import { GET_PROJECT } from 'sls-aws/src/descriptions/endpoints/endpointIds'
import { getResponseLenses } from 'sls-aws/src/server/api/getEndpointDesc'

const responseLenses = getResponseLenses(GET_PROJECT)
const { pathOrGames } = responseLenses

export default (state, props) => pathOrGames(
	[], getRecordSelector(state, props),
)
