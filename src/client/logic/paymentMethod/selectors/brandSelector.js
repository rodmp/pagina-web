import getRecordSelector from 'root/src/client/logic/api/selectors/getRecordSelector'

import { GET_PAYMENT_METHOD } from 'root/src/shared/descriptions/endpoints/endpointIds'
import { getResponseLenses } from 'root/src/server/api/getEndpointDesc'

const responseLenses = getResponseLenses(GET_PAYMENT_METHOD)
const { viewBrand } = responseLenses

export default (state, props) => viewBrand(getRecordSelector(state, props))
