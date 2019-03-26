// docker run --name dynamodb -p 9000:8000 amazon/dynamodb-local

import {
	merge, propOr, prop, head, values, compose, set, lensPath, map, dissoc,
} from 'ramda'

import apiTableConfig from 'root/src/aws/api/resources/apiDynamoDbTable'

jest.mock('root/src/server/api/dynamoClient', () => {
	/* eslint-disable global-require */
	const uuid = require('uuid/v1')
	const { DynamoDB } = require('aws-sdk')
	/* eslint-enable */
	const tableName = `TEST_TABLE_${uuid()}`
	const mockConfig = {
		endpoint: 'http://localhost:9000',
		accessKeyId: 'dynamo',
		secretAccessKey: 'devDummyKey',
		region: 'dev',
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
jest.mock('root/src/server/api/authorizeRequest', () => (
	endpointId, authentication,
) => Promise.resolve(authentication))

const tableParams = tableName => merge(
	{ TableName: tableName },
	// Can't use BillingMode in the aws-sdk yet
	compose(
		dissoc('BillingMode'),
		set(lensPath(['GlobalSecondaryIndexes', 0, 'ProvisionedThroughput', 'ReadCapacityUnits']), 1),
		set(lensPath(['GlobalSecondaryIndexes', 0, 'ProvisionedThroughput', 'WriteCapacityUnits']), 1),
		set(lensPath(['ProvisionedThroughput', 'ReadCapacityUnits']), 1),
		set(lensPath(['ProvisionedThroughput', 'WriteCapacityUnits']), 1),
	)(prop('Properties', head(values(apiTableConfig)))),
)

const {
	TABLE_NAME, dynamoDb,
} = require('root/src/server/api/dynamoClient')

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
	// console.info(tables)
	// await deleteAllTables(tables)
	// const tablesGone = await getTables()
	// console.info(tablesGone)
	await dynamoDb.deleteTable({ TableName: TABLE_NAME }).promise()
})

jest.setTimeout(10000)
