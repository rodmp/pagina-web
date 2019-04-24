import createListStoreKey from 'root/src/client/logic/api/util/createListStoreKey'
import createRecordStoreKey from 'root/src/client/logic/api/util/createRecordStoreKey'
import createRecordClickActionStoreKey from 'root/src/client/logic/api/util/createRecordClickActionStoreKey'
import { split, head, join } from 'ramda'

describe('creates store keys', () => {
	test('listStoreKey', () => {
		const endpointId = 'ENDPOINT_ID'
		const listStoreKey = createListStoreKey(endpointId)
		expect(head(split('-', listStoreKey))).toBe(endpointId)
	})
	test('recordStoreKey', () => {
		const recordType = 'recordType'
		const recordId = 'RECORD_ID'
		const recordStoreKey = createRecordStoreKey(recordId, recordType)
		expect(recordStoreKey).toBe(join('-', [recordId, recordType]))
	})
	test('recordClickActionStoreKey', () => {
		const recordClickActionStoreId = 'recordClickActionStoreId'
		const recordId = 'RECORD_ID'
		const recordClickActionStoreKey = createRecordClickActionStoreKey(recordClickActionStoreId, recordId)
		expect(recordClickActionStoreKey).toBe(join('-', [recordClickActionStoreId, recordId]))
	})
})
