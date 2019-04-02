import { TABLE_NAME, documentClient } from 'root/src/server/api/dynamoClient'
import { PARTITION_KEY, SORT_KEY } from 'root/src/shared/constants/apiDynamoIndexes'


export default async (userId, stripeCardId) => {
	const paymentMethodParams = {
		TableName: TABLE_NAME,
		KeyConditionExpression: `${PARTITION_KEY} = :pk and  ${SORT_KEY} = :card`,
		ExpressionAttributeValues: {
			':pk': userId,
			':card': `paymentMethod|${stripeCardId}`,
		},
		ConsistentRead: true,
	}

	const dynamoResult = await documentClient.query(paymentMethodParams).promise()
	return dynamoResult
}
