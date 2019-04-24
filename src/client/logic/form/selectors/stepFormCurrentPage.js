import { formStoreLenses } from 'root/src/client/logic/form/lenses'

const { pathOrStepFormPage } = formStoreLenses

export default (state, { moduleKey }) => pathOrStepFormPage(
	moduleKey, 0, state,
)
