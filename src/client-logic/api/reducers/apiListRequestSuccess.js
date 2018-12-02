import { reduce, append, assoc, compose } from 'ramda'

import { API_LIST_REQUEST_SUCCESS } from 'sls-aws/src/client-logic/api/actionIds'
import createRecordStoreId from 'sls-aws/src/client-logic/api/util/createRecordStoreId'
import {
	apiStoreLenses, nextKeyProp, idProp, itemsProp,
} from 'sls-aws/src/client-logic/api/lenses'

const { setNext, setItems, overRecords } = apiStoreLenses

export const apiListRequestSuccess = (
	state,
	{ listTypeFilterHash, recordType, list },
) => {
	let listIds = []
	const listItems = itemsProp(list)
	const recordsSet = reduce((result, record) => {
		const recordStoreId = createRecordStoreId(recordType, idProp(record))
		listIds = append(recordStoreId, listIds)
		return overRecords(assoc(recordStoreId, record), result)
	}, state, listItems)
	return compose(
		setNext(listTypeFilterHash, nextKeyProp(list)),
		setItems(listTypeFilterHash, listIds),
	)(recordsSet)
}

export default {
	[API_LIST_REQUEST_SUCCESS]: apiListRequestSuccess,
}
