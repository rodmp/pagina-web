import createProject from 'sls-aws/src/server/api/endpoints/createProject'

import { TABLE_NAME, documentClient } from 'sls-aws/src/server/api/dynamoClient'

const project = {
	title: 'good project',
	image: 'http://google.com',
	description: 'this is a great project',
	pledge: {
		stripeCardId: '1234asdf',
		amount: 500,
	},
	assignees: [
		{
			platform: 'twitch',
			url: 'http://assignee2.com',
		},
		{
			platform: 'twitch',
			url: 'http://assignee2.com',
		},
	],
}

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
		const res = await createProject('1234userid1234', project)
		const tableScan = await scanTable()
		expect(tableScan).toBe(true)
	})
})
