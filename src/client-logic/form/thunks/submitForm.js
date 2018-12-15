import { isNil, and, length, gt, prop, path } from 'ramda'
import submitForm from 'sls-aws/src/client-logic/form/actions/submitForm'
import submitFormComplete from 'sls-aws/src/client-logic/form/actions/submitFormComplete'
import moduleIdFromKey from 'sls-aws/src/client-logic/route/util/moduleIdFromKey'
import validateForm from 'sls-aws/src/client-logic/form/util/validateForm'
import setFormErrors from 'sls-aws/src/client-logic/form/actions/setFormErrors'
import formSubmits from 'sls-aws/src/descriptions/formSubmits'

import moduleDescriptions from 'sls-aws/src/descriptions/modules'

export const submitFormHof = (
	submitFormFn, moduleDescriptionsObj, validateFormFn, setFormErrorsFn,
	submitFormCompleteFn, formSubmitsObj,
) => (moduleKey, submitIndex) => (dispatch, getState) => {
	const nullSubmitIndex = isNil(submitIndex)
	const moduleId = moduleIdFromKey(moduleKey)
	const submits = prop(moduleId, formSubmitsObj)
	const multipleSubmits = gt(length(submits), 1)
	if (and(multipleSubmits, nullSubmitIndex)) {
		return Promise.resolve()
	}
	const correctedSubmitIndex = nullSubmitIndex ? 0 : submitIndex
	dispatch(submitFormFn(moduleKey, submitIndex))
	const state = getState()
	return validateFormFn(moduleKey, state).then((formData) => {
		const submitAction = path([correctedSubmitIndex, 'action'], submits)
		return dispatch(submitAction(formData)).then((res) => {
			const onSuccessFn = path(
				[correctedSubmitIndex, 'onSuccess'], submits,
			)
			if (onSuccessFn) {
				dispatch(onSuccessFn(res)).then(() => {
					dispatch(submitFormCompleteFn(moduleKey))
				})
			} else {
				dispatch(submitFormCompleteFn(moduleKey))
			}
		}).catch((errors) => {
			console.warn(errors)
			dispatch(setFormErrorsFn(moduleKey, errors))
			dispatch(submitFormCompleteFn(moduleKey))
		})
	}).catch((errors) => {
		console.warn(errors)
		dispatch(setFormErrorsFn(moduleKey, errors))
		dispatch(submitFormCompleteFn(moduleKey))
	})
}

export default submitFormHof(
	submitForm, moduleDescriptions, validateForm, setFormErrors,
	submitFormComplete, formSubmits,
)
