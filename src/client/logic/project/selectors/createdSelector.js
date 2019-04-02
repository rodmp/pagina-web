import getRecordSelector from 'root/src/client/logic/api/selectors/getRecordSelector'

import { GET_PROJECT } from 'root/src/shared/descriptions/endpoints/endpointIds'
import { getResponseLenses } from 'root/src/server/api/getEndpointDesc'
import moment from 'moment'

const responseLenses = getResponseLenses(GET_PROJECT)
const { viewCreated } = responseLenses

export default (state, props) => {
	const created = viewCreated(
		getRecordSelector(state, props),
	)
	const diff = moment().diff(created, 'days')
	return `${30 - diff}`
}
