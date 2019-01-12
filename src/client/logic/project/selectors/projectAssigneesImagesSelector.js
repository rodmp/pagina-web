import { map, propOr } from 'ramda'

import getRecordSelector from 'sls-aws/src/client/logic/api/selectors/getRecordSelector'

import { GET_PROJECT } from 'sls-aws/src/shared/descriptions/endpoints/endpointIds'
import { getResponseLenses } from 'sls-aws/src/server/api/getEndpointDesc'

const responseLenses = getResponseLenses(GET_PROJECT)
const { pathOrAssignees } = responseLenses

export default (state, props) => map(
	propOr(
		'http://placehold.jp/24/3d4070/ffffff/100x100.png?text=assignee',
		'image',
	),
	pathOrAssignees([1], getRecordSelector(state, props)),
)
