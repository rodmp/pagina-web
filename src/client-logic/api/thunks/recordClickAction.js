
import { prop, reduce, contains, equals } from 'ramda'

import createRecordClickActionStoreKey from 'sls-aws/src/client-logic/api/util/createRecordClickActionStoreKey'

import initApiRecordClickActionRequest from 'sls-aws/src/client-logic/api/actions/initApiRecordClickActionRequest'
import apiRecordClickActionRequestSuccess from 'sls-aws/src/client-logic/api/actions/apiRecordClickActionRequestSuccess'
import apiRecordClickActionRequestError from 'sls-aws/src/client-logic/api/actions/apiRecordClickActionRequestError'

import recordClickActionDescriptions from 'sls-aws/src/descriptions/recordClickActions'

import invokeApiLambda from 'sls-aws/src/client-logic/api/util/invokeApiLambda'

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
			endpointId, payloadMap,
		} = prop(recordClickActionId, recordClickActionDescriptions)
		const payloadSubs = { recordId }
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
