
import { formModuleLenses } from 'root/src/client/logic/form/lenses'
import moduleDescriptions from 'root/src/shared/descriptions/modules'

const { viewSchema } = formModuleLenses

export default (state, { moduleId }) => viewSchema(moduleId, moduleDescriptions)
