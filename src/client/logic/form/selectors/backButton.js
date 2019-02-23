import { moduleIdProp } from 'sls-aws/src/client/logic/route/lenses'
import {
	formModuleLenses,
} from 'sls-aws/src/client/logic/form/lenses'
import moduleDescriptions from 'sls-aws/src/shared/descriptions/modules'

const { viewBackButton } = formModuleLenses

export default (state, props) => viewBackButton(
	moduleIdProp(props), moduleDescriptions,
)
