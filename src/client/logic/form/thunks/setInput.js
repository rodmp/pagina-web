import changeInput from 'sls-aws/src/client/logic/form/actions/changeInput'

import clearFormErrors from 'sls-aws/src/client/logic/form/actions/clearFormErrors'
import setFormErrors from 'sls-aws/src/client/logic/form/actions/setFormErrors'

import validateForm from 'sls-aws/src/client/logic/form/util/validateForm'

export const setInputHof = (
	validateFormFn, changeInputFn, clearFormErrorsFn, setFormErrorsFn,
) => (moduleKey, fieldPath, value) => (dispatch, getState) => {
	dispatch(changeInputFn(moduleKey, fieldPath, value))
	const state = getState()
	return validateFormFn(moduleKey, state).then(() => {
		dispatch(clearFormErrorsFn(moduleKey))
	}).catch((errors) => {
		dispatch(setFormErrorsFn(moduleKey, errors))
	})
}

export default setInputHof(
	validateForm, changeInput, clearFormErrors, setFormErrors,
)
