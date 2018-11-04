// docker run --name dynamodb -p 9000:8000 amazon/dynamodb-local

import {
	merge, propOr, prop, head, values, map,
} from 'ramda'

import { TABLE_NAME, dynamoDb } from 'sls-aws/src/server/api/dynamoClient'

import apiTableConfig from 'sls-aws/src/aws/api/resources/apiDynamoDbTable'

jest.mock('sls-aws/src/server/api/dynamoClient', () => {
	const { DynamoDB } = require('aws-sdk')
	const mockConfig = {
		endpoint: 'http://localhost:9000',
		accessKeyId: 'dynamo',
		secretAccessKey: 'devDummyKey',
		region: 'dev',
		apiVersion: '2012-08-10',
	}
	return {
		TABLE_NAME: 'TEST_TABLE',
		dynamoDb: new DynamoDB(mockConfig),
		documentClient: new DynamoDB.DocumentClient(mockConfig),
	}
})

const tableParams = merge(
	{ TableName: TABLE_NAME },
	prop('Properties', head(values(apiTableConfig))),
)

const getTables = () => dynamoDb.listTables({}).promise().then(
	propOr([], 'TableNames'),
)

const deleteTables = tables => Promise.all(
	map(
		TableName => dynamoDb.deleteTable({ TableName }).promise(),
		tables,
	),
)

const createTable = () => dynamoDb.createTable(tableParams).promise()

beforeAll(async () => {
	const tables = await getTables()
	await deleteTables(tables)
	await createTable()
	const consoleTables = await getTables()
})
