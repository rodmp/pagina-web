import { apiFn } from 'sls-aws/src/server/api'

import { TABLE_NAME, documentClient } from 'sls-aws/src/server/api/dynamoClient'

import { CREATE_PROJECT } from 'sls-aws/src/descriptions/endpoints/endpointIds'
import createProjectPayload from 'sls-aws/src/server/api/mocks/createProjectPayload'
import contextMock from 'sls-aws/src/server/api/mocks/contextMock'

const scanTable = () => {
	const params = {
		TableName: TABLE_NAME,
	}
	return documentClient.scan(params).promise()
}

const event = {
	endpointId: CREATE_PROJECT,
	payload: createProjectPayload(),
}

describe('createProject', () => {
	test('createProject', async () => {
		const res = await apiFn(event, contextMock)
		const tableScan = await scanTable()
		console.log(tableScan)
		expect(res).toEqual({})
	})
})
