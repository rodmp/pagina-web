import { moduleIdProp } from 'sls-aws/src/client-logic/route/lenses'
import { formModuleLenses } from 'sls-aws/src/client-logic/form/lenses'
import moduleDescriptions from 'sls-aws/src/descriptions/modules'

const { viewSubTitle } = formModuleLenses

export default (state, props) => viewSubTitle(
	moduleIdProp(props), moduleDescriptions,
)
