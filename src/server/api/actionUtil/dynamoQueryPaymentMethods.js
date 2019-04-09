import { TABLE_NAME, documentClient } from 'root/src/server/api/dynamoClient'
import { PARTITION_KEY, SORT_KEY } from 'root/src/shared/constants/apiDynamoIndexes'

export default async (userId) => {
	const searchParams = {
		TableName: TABLE_NAME,
		KeyConditionExpression: `${PARTITION_KEY} = :pk and begins_with(${SORT_KEY}, :paymentMethod)`,
		ExpressionAttributeValues: {
			':pk': userId,
			':paymentMethod': 'paymentMethod|',
		},
	}
	const dynamoResults = documentClient.query(searchParams).promise()
	return dynamoResults
}
