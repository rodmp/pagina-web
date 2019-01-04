
import { formModuleLenses } from 'sls-aws/src/client-logic/form/lenses'
import moduleDescriptions from 'sls-aws/src/shared/descriptions/modules'

const { viewSchema } = formModuleLenses

export default (state, { moduleId }) => viewSchema(moduleId, moduleDescriptions)
