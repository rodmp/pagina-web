
import { formModuleLenses } from 'sls-aws/src/client-logic/form/lenses'
import moduleDescriptions from 'sls-aws/src/descriptions/modules'
import moduleIdFromKey from 'sls-aws/src/client-logic/route/util/moduleIdFromKey'

const { viewLabel } = formModuleLenses

export default (state, { moduleKey, fieldIndex }) => viewLabel(
	moduleIdFromKey(moduleKey), fieldIndex, moduleDescriptions
)
