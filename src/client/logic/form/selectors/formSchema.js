
import { formModuleLenses } from 'root/src/client/logic/form/lenses'
import moduleDescriptions from 'root/src/shared/descriptions/modules'

const { viewSchema, viewSubmits } = formModuleLenses

export default (state, { moduleId, submitKey }) => {
	if (submitKey > 0) {
		return viewSubmits(moduleId, moduleDescriptions)[submitKey].schema
	}
	return viewSchema(moduleId, moduleDescriptions)
}
