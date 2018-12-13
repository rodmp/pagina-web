import currentRouteParams from 'sls-aws/src/client-logic/route/selectors/currentRouteParams'
import getRecordSelector from 'sls-aws/src/client-logic/api/selectors/getRecordSelector'
import { project } from 'sls-aws/src/descriptions/endpoints/recordTypes'

// Should this be more general and just be a get record selector that looks
// to the module id for the recordType?
export default (state) => {
	const { projectId } = currentRouteParams(state)
	return getRecordSelector(
		state, { recordType: project, recordId: projectId },
	) || {}
}
