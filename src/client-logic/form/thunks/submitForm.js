import { isNil, and, length, gt } from 'ramda'
import submitForm from 'sls-aws/src/client-logic/form/actions/submitForm'
import submitFormComplete from 'sls-aws/src/client-logic/form/actions/submitFormComplete'
import moduleIdFromKey from 'sls-aws/src/client-logic/route/util/moduleIdFromKey'
import validateForm from 'sls-aws/src/client-logic/form/util/validateForm'
import setFormErrors from 'sls-aws/src/client-logic/form/actions/setFormErrors'

import { formModuleLenses } from 'sls-aws/src/client-logic/form/lenses'
import moduleDescriptions from 'sls-aws/src/descriptions/modules'

const { viewSubmits, viewAction, viewSuccess } = formModuleLenses

export const submitFormHof = (
	submitFormFn, moduleDescriptionsObj, validateFormFn, setFormErrorsFn,
	submitFormCompleteFn,
) => (moduleKey, submitIndex) => (dispatch, getState) => {
	const nullSubmitIndex = isNil(submitIndex)
	const moduleId = moduleIdFromKey(moduleKey)
	const submits = viewSubmits(moduleId, moduleDescriptionsObj)
	const multipleSubmits = gt(length(submits), 1)
	if (and(multipleSubmits, nullSubmitIndex)) {
		return Promise.resolve()
	}
	const correctedSubmitIndex = nullSubmitIndex ? 0 : submitIndex
	dispatch(submitFormFn(moduleKey, submitIndex))
	const state = getState()
	return validateFormFn(moduleKey, state).then((formData) => {
		const submitAction = viewAction(
			moduleId, correctedSubmitIndex, moduleDescriptionsObj,
		)
		return dispatch(submitAction(formData)).then((res) => {
			const onSuccessFn = viewSuccess(
				moduleId, correctedSubmitIndex, moduleDescriptionsObj,
			)
			dispatch(onSuccessFn(res))
			dispatch(submitFormCompleteFn(moduleKey))
		}).catch((errors) => {
			dispatch(setFormErrorsFn(moduleKey, errors))
			dispatch(submitFormCompleteFn(moduleKey))
		})
	}).catch((errors) => {
		dispatch(setFormErrorsFn(moduleKey, errors))
		dispatch(submitFormCompleteFn(moduleKey))
	})
}

export default submitFormHof(
	submitForm, moduleDescriptions, validateForm, setFormErrors,
	submitFormComplete,
)
