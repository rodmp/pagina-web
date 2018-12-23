import { moduleIdProp } from 'sls-aws/src/client-logic/route/lenses'
import { formModuleLenses } from 'sls-aws/src/client-logic/form/lenses'
import moduleDescriptions from 'sls-aws/src/descriptions/modules'

const { viewPreSubmitCaption } = formModuleLenses

export default (state, props) => viewPreSubmitCaption(
	moduleIdProp(props), moduleDescriptions,
)
