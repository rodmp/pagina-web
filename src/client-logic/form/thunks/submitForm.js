import { isNil, and, length, gt } from 'ramda'
import submitForm from 'sls-aws/src/client-logic/form/actions/submitForm'
import moduleIdFromKey from 'sls-aws/src/client-logic/route/util/moduleIdFromKey'
import validateForm from 'sls-aws/src/client-logic/form/util/validateForm'

import { formModuleLenses } from 'sls-aws/src/client-logic/form/lenses'
import moduleDescriptions from 'sls-aws/src/descriptions/modules'

const { viewSubmits, viewAction } = formModuleLenses

export const submitFormHof = (
	submitFormFn, moduleDescriptionsObj, validateFormFn
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
			moduleId, correctedSubmitIndex, moduleDescriptionsObj
		)
		return submitAction(formData)
	}).catch((errors) => {
		console.log('eyyyyyy', errors)
		// dispatch(setFormErrorsFn(moduleKey, errors))
		// set form dirty
		return Promise.resolve()
	})

}

export default submitFormHof(
	submitForm, moduleDescriptions, validateForm
)
