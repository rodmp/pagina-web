import { propOr, prop } from 'ramda'

import stringFormat from 'string-format'

import getRecordSelector from 'sls-aws/src/client/logic/api/selectors/getRecordSelector'

import { GET_PROJECT } from 'sls-aws/src/shared/descriptions/endpoints/endpointIds'
import { getResponseLenses } from 'sls-aws/src/server/api/getEndpointDesc'

const responseLenses = getResponseLenses(GET_PROJECT)
const { pathOrGamesItem } = responseLenses

export default (state, props) => stringFormat(
	propOr(
		'http://placehold.jp/24/cc9999/993333/{width}x{height}.png?text=Game',
		'boxArtTemplateUrl',
		pathOrGamesItem(0, [], getRecordSelector(state, props)),
	),
	{ width: 144, height: 240 },
)
