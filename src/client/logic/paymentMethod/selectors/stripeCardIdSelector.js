import getRecordSelector from 'root/src/client/logic/api/selectors/getRecordSelector'

import { GET_PAYMENT_METHOD } from 'root/src/shared/descriptions/endpoints/endpointIds'
import { getResponseLenses } from 'root/src/server/api/getEndpointDesc'

const responseLenses = getResponseLenses(GET_PAYMENT_METHOD)
const { viewStripeCardId } = responseLenses

export default (state, props) => viewStripeCardId(getRecordSelector(state, props))
