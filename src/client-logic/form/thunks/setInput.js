import validateSchema from 'sls-aws/src/util/validateSchema'
import changeInput from 'sls-aws/src/client-logic/form/actions/changeInput'

import clearFormErrors from 'sls-aws/src/client-logic/form/actions/clearFormErrors'
import setFormErrors from 'sls-aws/src/client-logic/form/actions/setFormErrors'

import validateForm from 'sls-aws/src/client-logic/form/util/validateForm'

export const setInputHof = (
	validateSchemaFn, changeInputFn, clearFormErrorsFn, setFormErrorsFn,
) => (moduleKey, fieldId, value) => (dispatch, getState) => {
	dispatch(changeInputFn(moduleKey, fieldId, value))
	const state = getState()
	return validateForm(moduleKey, state).then(() => {
		dispatch(clearFormErrorsFn(moduleKey))
	}).catch((errors) => {
		dispatch(setFormErrorsFn(moduleKey, errors))
	})
}

export default setInputHof(
	validateSchema, changeInput, clearFormErrors, setFormErrors,
)
