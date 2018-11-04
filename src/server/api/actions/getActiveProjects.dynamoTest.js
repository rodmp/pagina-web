import { apiFn } from 'sls-aws/src/server/api'

import { TABLE_NAME, documentClient } from 'sls-aws/src/server/api/dynamoClient'

import { CREATE_PROJECT } from 'sls-aws/src/descriptions/endpointIds'
import createProjectPayload from 'sls-aws/src/server/api/mocks/createProjectPayload'


const scanTable = () => {
	const params = {
		TableName: TABLE_NAME,
		// FilterExpression: 'Year = :this_year',
		// ExpressionAttributeValues: { ':this_year': 2015 },
	}

	return documentClient.scan(params).promise()
}

describe('getActiveProjects', () => {
	test('createProject', async () => {
		const res = await api('1234userid1234', project)
		const tableScan = await scanTable()
		expect(tableScan).toBe(true)
	})
})
