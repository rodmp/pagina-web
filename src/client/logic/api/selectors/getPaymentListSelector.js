import { contains, filter, reduce, map } from 'ramda'
import { apiStoreLenses } from 'root/src/client/logic/api/lenses'
import moduleEndpointIdSelector from 'root/src/client/logic/api/selectors/moduleEndpointIdSelector'
import getRecordSelector from 'root/src/client/logic/api/selectors/getRecordSelector'

const { viewItems, viewListProcessing } = apiStoreLenses

export default (state, { moduleId }) => {
	const endpointId = moduleEndpointIdSelector(state, { moduleId })
	const listProcessing = Object.keys(viewListProcessing(state) || [])

	const moduleProcess = filter(process => contains(endpointId, process), listProcessing)

	const list = reduce(
		(acc, item) => acc.concat(viewItems(item, state) || []),
		[],
		moduleProcess,
	)
	const paymentList = map(item => getRecordSelector(state, { moduleId, recordId: item }), list)
	return paymentList
}
