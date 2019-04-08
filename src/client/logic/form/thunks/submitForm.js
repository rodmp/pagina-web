import { isNil, and, length, gt, prop, path, pathOr } from 'ramda'
import validateForm from 'root/src/client/logic/form/util/validateForm'

import submitForm from 'root/src/client/logic/form/actions/submitForm'
import submitFormComplete from 'root/src/client/logic/form/actions/submitFormComplete'
import moduleIdFromKey from 'root/src/client/logic/route/util/moduleIdFromKey'

import setFormErrors from 'root/src/client/logic/form/actions/setFormErrors'
import clearForm from 'root/src/client/logic/form/actions/clearForm'
import clearPartialFormKeys from 'root/src/client/logic/form/actions/clearPartialFormKeys'

import formSubmits from 'root/src/shared/descriptions/formSubmits'

import userIdFromPartialEntries from 'root/src/client/logic/form/selectors/userIdFromPartialEntries'
import recordTypeSelector from 'root/src/client/logic/api/selectors/recordTypeSelector'
import createRecordStoreKey from 'root/src/client/logic/api/util/createRecordStoreKey'
import generalRecordModification from 'root/src/client/logic/api/actions/generalRecordModification'
import subPushRoute from 'root/src/client/logic/route/thunks/subPushRoute'

import invokeApiLambda from 'root/src/client/logic/api/util/invokeApiLambda'
import { CLEAR_PARTIAL_FORM_KEYS } from 'root/src/shared/descriptions/endpoints/endpointIds'

import { idProp } from 'root/src/client/logic/api/lenses'

import moduleDescriptions from 'root/src/shared/descriptions/modules'

import { formStoreLenses } from 'root/src/client/logic/form/lenses'

const { viewFormChild } = formStoreLenses

export const submitFormHof = (
	submitFormFn, moduleDescriptionsObj, validateFormFn, setFormErrorsFn,
	clearFormFn, submitFormCompleteFn, formSubmitsObj,
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
	return validateFormFn(moduleKey, state, submitIndex).then((formData) => {
		const submitAction = path([correctedSubmitIndex, 'action'], submits)
		return dispatch(submitAction(formData)).then((res) => {
			const successPromises = []
			const onSuccessFn = path(
				[correctedSubmitIndex, 'onSuccess'], submits,
			)

			if (onSuccessFn) {
				const partialFormEntries = viewFormChild(`db-${moduleKey}`, state)
				if (partialFormEntries) {
					const partialKeys = Object.keys(partialFormEntries)
					const userId = userIdFromPartialEntries(partialFormEntries)

					invokeApiLambda(
						CLEAR_PARTIAL_FORM_KEYS,
						{ userId, partialKeys },
						state,
					).then(() => {
						dispatch(clearPartialFormKeys(moduleKey))
						successPromises.push(dispatch(onSuccessFn(res)))
					})
				} else {
					successPromises.push(dispatch(onSuccessFn(res)))
				}
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
				dispatch(clearFormFn(moduleKey))
				dispatch(submitFormCompleteFn(moduleKey))
			})
		}).catch((errors) => {
			console.log(1)
			console.warn(errors)
			dispatch(setFormErrorsFn(moduleKey, errors))
			dispatch(submitFormCompleteFn(moduleKey))
		})
	}).catch((errors) => {
		console.log(2)
		console.warn(errors)
		dispatch(setFormErrorsFn(moduleKey, errors))
		dispatch(submitFormCompleteFn(moduleKey))
	})
}

export default submitFormHof(
	submitForm, moduleDescriptions, validateForm, setFormErrors, clearForm,
	submitFormComplete, formSubmits,
)
