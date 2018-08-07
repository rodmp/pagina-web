import { formStoreLenses } from 'sls-aws/src/client-logic/form/lenses'

const { pathOrFormInputs } = formStoreLenses

export default (state, { moduleKey }) => pathOrFormInputs(
	moduleKey, {}, state
)
