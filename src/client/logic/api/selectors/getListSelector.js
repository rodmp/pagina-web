import { contains, filter, reduce } from 'ramda'
import { apiStoreLenses } from 'root/src/client/logic/api/lenses'
import moduleEndpointIdSelector from 'root/src/client/logic/api/selectors/moduleEndpointIdSelector'

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

	return list
}
