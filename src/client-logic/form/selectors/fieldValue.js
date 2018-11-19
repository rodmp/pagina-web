import { formStoreLenses } from 'sls-aws/src/client-logic/form/lenses'

const { pathOrFormInputsChild } = formStoreLenses

export default (state, { moduleKey, fieldId }) => pathOrFormInputsChild(
	moduleKey, fieldId, '', state,
)
