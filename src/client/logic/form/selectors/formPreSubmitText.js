import { moduleIdProp } from 'root/src/client/logic/route/lenses'
import { formModuleLenses } from 'root/src/client/logic/form/lenses'
import moduleDescriptions from 'root/src/shared/descriptions/modules'

const { viewPreSubmitText } = formModuleLenses

export default (state, props) => viewPreSubmitText(
	moduleIdProp(props), moduleDescriptions,
)
