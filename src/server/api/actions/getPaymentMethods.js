import { TABLE_NAME, documentClient } from 'root/src/server/api/dynamoClient'
import { PARTITION_KEY, SORT_KEY } from 'root/src/shared/constants/apiDynamoIndexes'
import listResults from 'root/src/server/api/actionUtil/listResults'
import paymentMethodSerializer from 'root/src/server/api/serializers/paymentMethodSerializer'

export default async ({ userId }) => {
	const searchParams = {
		TableName: TABLE_NAME,
		KeyConditionExpression: `${PARTITION_KEY} = :pk and begins_with(${SORT_KEY}, :creditCard)`,
		ExpressionAttributeValues: {
			':pk': `${userId}`,
			':creditCard': 'creditCard|',
		},
	}
	const dynamoResults = await documentClient.query(searchParams).promise()
	return listResults({
		dynamoResults,
		serializer: paymentMethodSerializer,
	})
}
