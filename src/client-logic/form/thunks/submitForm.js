import { isNil, and, length, gt, prop, path, pathOr } from 'ramda'
import submitForm from 'sls-aws/src/client-logic/form/actions/submitForm'
import submitFormComplete from 'sls-aws/src/client-logic/form/actions/submitFormComplete'
import moduleIdFromKey from 'sls-aws/src/client-logic/route/util/moduleIdFromKey'
import validateForm from 'sls-aws/src/client-logic/form/util/validateForm'
import setFormErrors from 'sls-aws/src/client-logic/form/actions/setFormErrors'
import formSubmits from 'sls-aws/src/shared/descriptions/formSubmits'

import recordTypeSelector from 'sls-aws/src/client-logic/api/selectors/recordTypeSelector'
import createRecordStoreKey from 'sls-aws/src/client-logic/api/util/createRecordStoreKey'
import generalRecordModification from 'sls-aws/src/client-logic/api/actions/generalRecordModification'
import subPushRoute from 'sls-aws/src/client-logic/route/thunks/subPushRoute'

import { idProp } from 'sls-aws/src/client-logic/api/lenses'

import moduleDescriptions from 'sls-aws/src/shared/descriptions/modules'

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
			const successPromises = []
			const onSuccessFn = path(
				[correctedSubmitIndex, 'onSuccess'], submits,
			)
			if (onSuccessFn) {
				successPromises.push(dispatch(onSuccessFn(res)))
			}

			const {
				onSuccessRecordUpdates, endpointId, onSuccessRedirect,
			} = pathOr([
				moduleId, 'submits', correctedSubmitIndex,
				'onSuccessRecordUpdates',
			], {}, moduleDescriptionsObj)
			const recordType = recordTypeSelector(endpointId)
			const recordId = idProp(res)
			const recordStoreKey = createRecordStoreKey(
				recordType, recordId,
			)
			const substitutes = { formData, recordStoreKey, res }
			if (onSuccessRecordUpdates) {
				successPromises.push(
					dispatch(generalRecordModification(
						substitutes,
						onSuccessRecordUpdates,
					)),
				)
			}

			if (onSuccessRedirect) {
				const { routeId, routeParams } = onSuccessRedirect
				successPromises.push(
					dispatch(
						subPushRoute(routeId, routeParams, substitutes),
					),
				)
			}

			Promise.all(successPromises).then(() => {
				dispatch(submitFormCompleteFn(moduleKey))
			})
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
