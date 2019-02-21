import { compose, take, concat, __ } from 'ramda'

import getRecordSelector from 'sls-aws/src/client/logic/api/selectors/getRecordSelector'
import maxDareTitleLength from 'sls-aws/src/shared/constants/maxDareTitleLength'

import { GET_PROJECT } from 'sls-aws/src/shared/descriptions/endpoints/endpointIds'
import { getResponseLenses } from 'sls-aws/src/server/api/getEndpointDesc'

const responseLenses = getResponseLenses(GET_PROJECT)
const { viewTitle } = responseLenses

export default (state, props) => {
	const title = viewTitle(getRecordSelector(state, props))

	if (title) {
		return compose(
			concat(__, '...'),
			take(maxDareTitleLength),
		)(title)
	}
}
