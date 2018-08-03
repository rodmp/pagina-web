import validateSchema from 'sls-aws/src/util/validateSchema'
import changeInput from 'sls-aws/src/client-logic/form/actions/changeInput'

import clearFormErrors from 'sls-aws/src/client-logic/form/actions/clearFormErrors'
import setFormErrors from 'sls-aws/src/client-logic/form/actions/setFormErrors'

export const submitFormHof = (
	validateSchemaFn, changeInputFn, clearFormErrorsFn, setFormErrorsFn,
) => (formHash, inputId, value) => (dispatch, getState) => {
	const state = getState()
	const formId = getFormId()
	const formData =  getFormData()
	return dispatch(changeInputFn(formHash, inputId, value)).then(() => {
		const state = getState()
		const newValue = getFormData()
		return validateSchemaFn(formId, formSchema, newValue).then(() => {
			dispatch(clearFormErrorsFn(formHash))
		}).catch(() => {
			dispatch(setFormErrorsFn(formHash))
		})
	})
	
}

export default submitFormHof(
	validateSchema, changeInput, clearFormErrors, setFormErrors,
)
