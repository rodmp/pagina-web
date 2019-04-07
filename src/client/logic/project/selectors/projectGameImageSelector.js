import { propOr, prop } from 'ramda'

import stringFormat from 'string-format'

import getRecordSelector from 'root/src/client/logic/api/selectors/getRecordSelector'

import { GET_PROJECT } from 'root/src/shared/descriptions/endpoints/endpointIds'
import { getResponseLenses } from 'root/src/server/api/getEndpointDesc'

const responseLenses = getResponseLenses(GET_PROJECT)
const { pathOrGamesItem } = responseLenses

export default (state, props) => propOr(
	'http://placehold.jp/24/cc9999/993333/{width}x{height}.png?text=Game',
	'boxArtTemplateUrl',
	pathOrGamesItem(0, [], getRecordSelector(state, props)),
)
