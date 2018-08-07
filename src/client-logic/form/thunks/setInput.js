import validateSchema from 'sls-aws/src/util/validateSchema'
import changeInput from 'sls-aws/src/client-logic/form/actions/changeInput'

import clearFormErrors from 'sls-aws/src/client-logic/form/actions/clearFormErrors'
import setFormErrors from 'sls-aws/src/client-logic/form/actions/setFormErrors'
import getFormSchema from 'sls-aws/src/client-logic/form/selectors/formSchema'
import getFormData from 'sls-aws/src/client-logic/form/selectors/formData'
import moduleIdFromKey from 'sls-aws/src/client-logic/route/util/moduleIdFromKey'

export const setInputHof = (
	validateSchemaFn, changeInputFn, clearFormErrorsFn, setFormErrorsFn,
) => (moduleKey, fieldId, value) => (dispatch, getState) => {
	dispatch(changeInputFn(moduleKey, fieldId, value))
	const moduleId = moduleIdFromKey(moduleKey)
	const formSchema = getFormSchema(null, { moduleId })
	const formData = getFormData(getState(), { moduleKey })
	return validateSchemaFn(moduleId, formSchema, formData).then((x) => {
		console.log(x)
		dispatch(clearFormErrorsFn(formHash))
	}).catch((x) => {
		console.log(x)
		dispatch(setFormErrorsFn(formHash))
	})
}

export default setInputHof(
	validateSchema, changeInput, clearFormErrors, setFormErrors,
)
