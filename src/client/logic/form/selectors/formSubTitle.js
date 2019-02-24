import { moduleIdProp } from 'root/src/client/logic/route/lenses'
import { formModuleLenses } from 'root/src/client/logic/form/lenses'
import moduleDescriptions from 'root/src/shared/descriptions/modules'

const { viewSubTitle } = formModuleLenses

export default (state, props) => viewSubTitle(
	moduleIdProp(props), moduleDescriptions,
)
