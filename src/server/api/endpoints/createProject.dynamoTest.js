import createProject from 'sls-aws/src/server/api/endpoints/createProject'

import { TABLE_NAME, documentClient } from 'sls-aws/src/server/api/dynamoClient'

import projectPayload from 'sls-aws/src/server/api/mocks/projectPayload'

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
		const res = await createProject('1234userid1234', projectPayload)
		const tableScan = await scanTable()
		expect(tableScan).toBe(true)
	})
})
