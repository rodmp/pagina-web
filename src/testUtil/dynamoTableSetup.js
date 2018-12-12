// docker run --name dynamodb -p 9000:8000 amazon/dynamodb-local

import { merge, propOr, prop, head, values, compose, set, lensPath, map } from 'ramda'

import apiTableConfig from 'sls-aws/src/aws/api/resources/apiDynamoDbTable'

jest.mock('sls-aws/src/server/api/dynamoClient', () => {
	// eslint-disable-next-line
	const uuid = require('uuid/v1')
	const tableName = `TEST_TABLE_${uuid()}`
	const { DynamoDB } = require('aws-sdk')
	const mockConfig = {
		endpoint: 'http://localhost:9000',
		accessKeyId: 'dynamo',
		secretAccessKey: 'devDummyKey',
		region: 'dev',
		apiVersion: '2012-08-10',
	}
	return {
		TABLE_NAME: tableName,
		dynamoDb: new DynamoDB(mockConfig),
		documentClient: new DynamoDB.DocumentClient(mockConfig),
	}
})

// Normally authentication is a JWT that gets decoded and returns a user id.
// For tests I'm mocking the authorizeRequest which does the jwt decoding and
// just returning whatever you put for authentication as the userId
jest.mock('sls-aws/src/server/api/authorizeRequest', () => (
	endpointId, authentication,
) => Promise.resolve(authentication))

const tableParams = tableName => merge(
	{ TableName: tableName },
	compose(
		set(lensPath(['ProvisionedThroughput', 'ReadCapacityUnits']), 100),
		set(lensPath(['ProvisionedThroughput', 'WriteCapacityUnits']), 100),
	)(prop('Properties', head(values(apiTableConfig)))),
)

const {
	TABLE_NAME, dynamoDb,
} = require('sls-aws/src/server/api/dynamoClient')

beforeAll(async () => {
	await dynamoDb.createTable(tableParams(TABLE_NAME)).promise()
})

const getTables = () => dynamoDb.listTables({}).promise().then(
	propOr([], 'TableNames'),
)

const deleteAllTables = tables => Promise.all(
	map(
		TableName => dynamoDb.deleteTable({ TableName }).promise(),
		tables,
	),
)

afterAll(async () => {
	// const tables = await getTables()
	// console.log(tables)
	// await deleteAllTables(tables)
	// const tablesGone = await getTables()
	// console.log(tablesGone)

	await dynamoDb.deleteTable({ TableName: TABLE_NAME }).promise()
})
