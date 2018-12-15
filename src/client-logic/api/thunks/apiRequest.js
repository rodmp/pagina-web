import { equals } from 'ramda'

import createListStoreKey from 'sls-aws/src/client-logic/api/util/createListStoreKey'
import createRecordStoreKey from 'sls-aws/src/client-logic/api/util/createRecordStoreKey'
import { idProp } from 'sls-aws/src/client-logic/api/lenses'

import initApiListRequest from 'sls-aws/src/client-logic/api/actions/initApiListRequest'
import apiListRequestSuccess from 'sls-aws/src/client-logic/api/actions/apiListRequestSuccess'
import apiListRequestError from 'sls-aws/src/client-logic/api/actions/apiListRequestError'

import initApiRecordRequest from 'sls-aws/src/client-logic/api/actions/initApiRecordRequest'
import apiRecordRequestSuccess from 'sls-aws/src/client-logic/api/actions/apiRecordRequestSuccess'
import apiRecordRequestError from 'sls-aws/src/client-logic/api/actions/apiRecordRequestError'

import recordTypeSelector from 'sls-aws/src/client-logic/api/selectors/recordTypeSelector'
import endpointTypeSelector from 'sls-aws/src/client-logic/api/selectors/endpointTypeSelector'

import invokeApiLambda from 'sls-aws/src/client-logic/api/util/invokeApiLambda'

export const fetchList = async (dispatch, state, endpointId, payload) => {
	const recordType = recordTypeSelector(endpointId)
	const listStoreKey = createListStoreKey(endpointId, payload)
	dispatch(initApiListRequest(listStoreKey))
	const lambdaRes = await invokeApiLambda(endpointId, payload, state)
	const { statusCode, body, statusError, generalError } = lambdaRes
	if (equals(statusCode, 200)) {
		dispatch(apiListRequestSuccess(listStoreKey, recordType, body))
	} else {
		const error = { ...statusError, ...generalError }
		dispatch(apiListRequestError(listStoreKey, error))
	}
	return lambdaRes
}

export const fetchRecord = async (dispatch, state, endpointId, payload) => {
	const recordType = recordTypeSelector(endpointId)
	const recordId = idProp(payload)
	if (recordId) { // else creating, don't need record loading state
		const recordStoreKey = createRecordStoreKey(recordType, recordId)
		dispatch(initApiRecordRequest(recordStoreKey))
	}
	const lambdaRes = await invokeApiLambda(endpointId, payload, state)
	const { statusCode, body, statusError, generalError } = lambdaRes
	if (equals(statusCode, 200)) {
		dispatch(apiRecordRequestSuccess(recordType, body))
	} else if (recordId) { // else creating, don't need record error state
		const error = { ...statusError, ...generalError }
		dispatch(apiRecordRequestError(recordType, recordId, error))
	}
	return lambdaRes
}

const endpointTypeFunctionMap = {
	list: fetchList,
	record: fetchRecord,
}

export default (endpointId, payload) => async (dispatch, getState) => {
	try {
		const state = getState()
		const endpointType = endpointTypeSelector(endpointId)
		return endpointTypeFunctionMap[endpointType](
			dispatch, state, endpointId, payload,
		)
	} catch (e) {
		console.warn(e)
	}
}
