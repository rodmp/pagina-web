import { formStoreLenses } from 'sls-aws/src/client-logic/form/lenses'

const { pathOrFieldErrorsChild, viewDirty } = formStoreLenses
// field errors are currently stored in fieldData, lets change that to errors,
// check if field is dirty, if so display error, else don't
export default (state, { moduleKey, fieldId }) => (
	viewDirty(moduleKey, fieldId, state) ? 
		pathOrFieldErrorsChild(moduleKey, fieldId, '', state) : ''
)
