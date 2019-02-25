
import { prop, reduce, contains, equals } from 'ramda'

import createRecordClickActionStoreKey from 'root/src/client/logic/api/util/createRecordClickActionStoreKey'

import initApiRecordClickActionRequest from 'root/src/client/logic/api/actions/initApiRecordClickActionRequest'
import apiRecordClickActionRequestSuccess from 'root/src/client/logic/api/actions/apiRecordClickActionRequestSuccess'
import apiRecordClickActionRequestError from 'root/src/client/logic/api/actions/apiRecordClickActionRequestError'
import generalRecordModification from 'root/src/client/logic/api/actions/generalRecordModification'
import recordClickActionDescriptions from 'root/src/shared/descriptions/recordClickActions'

import recordTypeSelector from 'root/src/client/logic/api/selectors/recordTypeSelector'
import createRecordStoreKey from 'root/src/client/logic/api/util/createRecordStoreKey'

import invokeApiLambda from 'root/src/client/logic/api/util/invokeApiLambda'

export default (
	recordClickActionId, recordId,
) => async (dispatch, getState) => {
	try {
		const recordClickActionStoreKey = createRecordClickActionStoreKey(
			recordClickActionId, recordId,
		)
		dispatch(initApiRecordClickActionRequest(recordClickActionStoreKey))
		const state = getState()
		const {
			endpointId, payloadMap, onSuccessRecordUpdates,
		} = prop(recordClickActionId, recordClickActionDescriptions)
		const payloadSubs = { recordId }
		// @TODO replace this with util/subObj (also in recordModuleOnEnter)
		const payload = reduce(
			(result, [key, value]) => {
				if (contains(':', value)) {
					return { ...result, [key]: payloadSubs[value.substr(1)] }
				}
				return { ...result, [key]: value }
			},
			{},
			payloadMap,
		)
		const lambdaRes = await invokeApiLambda(endpointId, payload, state)
		const { statusCode, body, statusError, generalError } = lambdaRes
		if (equals(statusCode, 200)) {
			dispatch(
				apiRecordClickActionRequestSuccess(
					recordClickActionStoreKey, body,
				),
			)
			if (onSuccessRecordUpdates) {
				const recordType = recordTypeSelector(endpointId)
				const recordStoreKey = createRecordStoreKey(
					recordType, recordId,
				)
				dispatch(generalRecordModification(
					{ recordStoreKey },
					onSuccessRecordUpdates,
				))
			}
		} else { // else creating, don't need record error state
			const error = { ...statusError, ...generalError }
			dispatch(
				apiRecordClickActionRequestError(
					recordClickActionStoreKey, error,
				),
			)
		}
		return lambdaRes
	} catch (e) {
		console.warn(e)
	}
}
