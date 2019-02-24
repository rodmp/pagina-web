import { reduce, append, compose } from 'ramda'

import { API_LIST_REQUEST_SUCCESS } from 'root/src/client/logic/api/actionIds'
import createRecordStoreKey from 'root/src/client/logic/api/util/createRecordStoreKey'
import {
	apiStoreLenses, nextKeyProp, idProp, itemsProp,
} from 'root/src/client/logic/api/lenses'

const {
	setNext, setItems, setRecordsChild, setListProcessingChild,
} = apiStoreLenses

export const apiListRequestSuccess = (
	state,
	{ listStoreKey, recordType, list },
) => {
	let listIds = []
	const listItems = itemsProp(list)
	const recordsSet = reduce((result, record) => {
		const recordId = idProp(record)
		const recordStoreId = createRecordStoreKey(recordType, recordId)
		listIds = append(recordId, listIds)
		return setRecordsChild(recordStoreId, record, result)
	}, state, listItems)
	return compose(
		setNext(listStoreKey, nextKeyProp(list)),
		setItems(listStoreKey, listIds),
		setListProcessingChild(listStoreKey, false),
	)(recordsSet)
}

export default {
	[API_LIST_REQUEST_SUCCESS]: apiListRequestSuccess,
}
