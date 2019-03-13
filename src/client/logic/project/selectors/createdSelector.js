import getRecordSelector from 'root/src/client/logic/api/selectors/getRecordSelector'

import { GET_PROJECT } from 'root/src/shared/descriptions/endpoints/endpointIds'
import { getResponseLenses } from 'root/src/server/api/getEndpointDesc'
import { timeMeasurement } from 'root/src/shared/constants/measurement'

const responseLenses = getResponseLenses(GET_PROJECT)
const { viewCreated } = responseLenses

export default (state, props) => {
	const created = viewCreated(
		getRecordSelector(state, props),
	)
	const nowDate = new Date()
	const createdDate = new Date(created)
	const diff = Math.ceil(Math.abs(nowDate.getTime() - createdDate.getTime()))
	/ (timeMeasurement.second * timeMeasurement.minute * timeMeasurement.houre * timeMeasurement.day)
	return `${diff}`
}
