import currentRouteParams from 'sls-aws/src/client-logic/route/selectors/currentRouteParams'
import getRecordSelector from 'sls-aws/src/client-logic/api/selectors/getRecordSelector'
import { project } from 'sls-aws/src/descriptions/endpoints/recordTypes'

export default (state) => {
	const { projectId } = currentRouteParams(state)
	return getRecordSelector(
		state, { recordType: project, recordId: projectId },
	) || {}
}
