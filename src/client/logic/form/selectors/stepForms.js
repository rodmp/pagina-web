import { stepFormModuleLenses } from 'root/src/client/logic/form/lenses'
import moduleDescriptions from 'root/src/shared/descriptions/modules'

const { viewForms } = stepFormModuleLenses

export default (state, { moduleId }) => viewForms(
	moduleId, moduleDescriptions,
)
