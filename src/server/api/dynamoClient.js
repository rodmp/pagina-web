import { DynamoDB } from 'aws-sdk'

export const TABLE_NAME = process.env.API_DYNAMO_DB_TABLE

export const dynamoDb = new DynamoDB()
export const documentClient = new DynamoDB.DocumentClient()
