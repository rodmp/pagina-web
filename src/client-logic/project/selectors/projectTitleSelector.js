import routeProjectSelector from 'sls-aws/src/client-logic/project/selectors/routeProjectSelector'


import { GET_PROJECT } from 'sls-aws/src/descriptions/endpoints/endpointIds'
import { getResponseLenses } from 'sls-aws/src/server/api/getEndpointDesc'

const responseLenses = getResponseLenses(GET_PROJECT)
const { viewTitle } = responseLenses

export default state => viewTitle(routeProjectSelector(state))
