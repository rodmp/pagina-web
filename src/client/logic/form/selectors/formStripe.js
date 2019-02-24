import { formModuleLenses } from 'root/src/client/logic/form/lenses'

const { viewFormStripe } = formModuleLenses

export default (state, { moduleKey }) => viewFormStripe(
	moduleKey, state,
)
