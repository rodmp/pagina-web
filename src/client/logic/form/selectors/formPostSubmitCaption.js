import { moduleIdProp } from 'root/src/client/logic/route/lenses'
import { formModuleLenses } from 'root/src/client/logic/form/lenses'
import moduleDescriptions from 'root/src/shared/descriptions/modules'

const { viewPostSubmitCaption } = formModuleLenses

export default (state, props) => viewPostSubmitCaption(
	moduleIdProp(props), moduleDescriptions,
)
