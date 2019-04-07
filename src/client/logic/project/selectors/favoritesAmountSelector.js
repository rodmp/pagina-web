import getRecordSelector from 'root/src/client/logic/api/selectors/getRecordSelector'

import { GET_PROJECT } from 'root/src/shared/descriptions/endpoints/endpointIds'
import { getResponseLenses } from 'root/src/server/api/getEndpointDesc'

const responseLenses = getResponseLenses(GET_PROJECT)
const { viewFavoritesAmount } = responseLenses

export default (state, props) => {
	const favoritesAmount = viewFavoritesAmount(
		getRecordSelector(state, props),
	)
	return `${favoritesAmount}`
}
